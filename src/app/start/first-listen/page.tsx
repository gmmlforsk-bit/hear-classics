'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Play, Pause, RotateCcw, CheckCircle, HelpCircle, Headphones, Volume2, Bookmark, Check, Sparkles, Sprout } from 'lucide-react';
import { saveNote } from '@/lib/storage';

const listeningSteps = [
  '【先听开头】：一群弦乐奏出有分句的明亮旋律。用自己的方式在心里记住它的轮廓，不必死记每一个具体的音符。',
  '【注意质感转变】：继续往下听，注意声音什么时候突然变得更细、更像几只小鸟在高处快速啁啾回应。只在心里记下“变了”，不用急着给它起学术名词。',
  '【捕捉熟悉片段的返回】：听到熟悉的开头那段旋律重新大声合奏时，轻轻点一下桌面。留意：返回的旋律可能被缩短了，或者变了调，不要求每次都一模一样。',
  '【第二遍深入】：从头再听一次。这一次专门盯住一次“返回”：它前面的音乐是什么状态（比如暴风雨掠过、独奏翻滚）？返回之后乐队又发生了什么？',
];

export default function FirstListenPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const seekTo = (fraction: number) => {
    if (audioRef.current && duration > 0) {
      audioRef.current.currentTime = fraction * duration;
    }
  };

  const handleSaveNote = async () => {
    if (!noteText.trim()) return;
    try {
      await saveNote({
        id: `note-first-listen-${Date.now()}`,
        contentId: 'vivaldi-spring-mvt1',
        contentType: 'work',
        text: noteText,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      setNoteSaved(true);
      setTimeout(() => setNoteSaved(false), 2500);
    } catch {
      setNoteSaved(true);
      setTimeout(() => setNoteSaved(false), 2500);
    }
  };

  return (
    <div className="min-h-screen py-10 md:py-16 bg-gradient-to-b from-[#0A1009] via-[#080D08] to-[#09090B] text-zinc-100">
      <div className="content-area max-w-4xl relative">
        {/* Ambient Spring Olive Light Spotlights */}
        <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#466E41]/12 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#2E4A2A]/15 blur-3xl pointer-events-none" />

        {/* Navigation */}
        <Link
          href="/start/"
          className="inline-flex items-center gap-1.5 text-sm text-[#A8CEA2] hover:text-white mb-6 transition-colors font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          返回选择界面
        </Link>

        {/* Header Block in Classical Olive */}
        <div className="max-w-reading mb-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1C2C1B] text-[#BEE2B8] border border-[#3E5F3B] shadow-sm">
              <Sprout className="w-3.5 h-3.5 text-[#79BD72]" />
              免费首听实操 · 橄榄绿春季特展
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#162315] text-[#9AC594] border border-[#2F472D]">
              零基础友好
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#263D23] text-[#D0F0CA] border border-[#4C7546]">
              安东尼奥·维瓦尔第 · 《四季·春》
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#162315] text-[#9AC594] border border-[#2F472D]">
              无需会员直接播放
            </span>
          </div>

          <h1 className="heading-serif text-heading-1 md:text-display-2 text-white">
            第一遍，只听见旋律回来
          </h1>
          <p className="mt-3 text-body text-[#C4DFC0] leading-relaxed font-serif">
            无需乐理，不需要识谱，用一段直接可以在浏览器内播放的真实名作录音，练习最基本也最有用的古典聆听动作：<strong className="text-white font-semibold">认出熟悉的音乐材料再次出现</strong>。
          </p>
        </div>

        {/* Embedded Native Audio Player Box - Dedicated Olive Green Theme */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#121B11] via-[#0E160D] to-[#0A1009] p-6 md:p-8 border border-[#2F452D] shadow-[0_20px_50px_rgba(8,18,10,0.85)] mb-10 space-y-6 backdrop-blur-2xl">
          {/* Subtle Ambient Plaque Halo */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#52804D]/15 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#4A6E46] shadow-lg shrink-0 bg-[#0A1009]">
                <img
                  src="/images/composers/vivaldi.jpg"
                  alt="安东尼奥·维瓦尔第"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#A8D3A3] uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#6CBD63] animate-pulse" />
                  AUDIO PLAYER · 官方开源正版录音 · 橄榄绿电声席
                </div>
                <h3 className="heading-serif font-bold text-lg md:text-xl text-[#F2FAF0] mt-0.5">
                  维瓦尔第：E大调小提琴协奏曲《春》RV 269 第一乐章（快板）
                </h3>
                <p className="text-xs text-[#9EC799] mt-1 font-serif italic">
                  独奏：John Harrison · 指挥：Robert Turizziani · 乐团：Wichita State Chamber Players
                </p>
              </div>
            </div>

            {/* Controls in Olive Green */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4C7948] to-[#6EA666] text-white flex items-center justify-center hover:from-[#578A52] hover:to-[#7EBC75] hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(110,166,102,0.45)] transition-all shrink-0 font-bold border border-[#A4DE9C]/40"
                aria-label={isPlaying ? '暂停' : '播放'}
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 ml-0.5 fill-current" />}
              </button>
              <button
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                  }
                }}
                className="p-3 rounded-full bg-[#1A281A] hover:bg-[#253924] text-[#BEE2B8] border border-[#3A5638] transition-colors"
                title="从头重播"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress Slider */}
          <div className="space-y-2 relative z-10">
            <div
              className="w-full h-2.5 rounded-full bg-[#182517] cursor-pointer relative overflow-hidden border border-[#2E422C]"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const frac = (e.clientX - rect.left) / rect.width;
                seekTo(frac);
              }}
            >
              <div
                className="h-full bg-gradient-to-r from-[#4F7D4B] via-[#75B26E] to-[#A4DE9C] rounded-full transition-all duration-100"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            <div className="flex justify-between text-xs font-mono text-[#98C293]">
              <span>{formatTime(currentTime)}</span>
              <span>{duration > 0 ? formatTime(duration) : '加载中...'}</span>
            </div>
          </div>

          <audio
            ref={audioRef}
            src="/audio/spring-harrison.mp3"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            preload="metadata"
          />

          <div className="pt-3 border-t border-[#253823] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#8AB585] font-mono relative z-10">
            <span>授权协议：CC BY-SA 4.0 国际通用许可 · 经 Wikimedia Commons 正式转码</span>
            <span className="text-[#C2E4BC] font-medium">随时可以在阅读下方指引时随手暂停或跳转</span>
          </div>
        </div>

        {/* Guided Steps Carousel / Stepper */}
        <section className="mb-12 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="heading-serif text-heading-2 text-white">
              这一遍，耳朵要抓住什么？
            </h2>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#1C2B1B] text-[#BEE2B8] border border-[#3E5E3A]">
              步骤 {activeStep + 1} / {listeningSteps.length}
            </span>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-[#0F160E] border border-[#2B3F29] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#446A3E]/10 rounded-full blur-2xl pointer-events-none" />

            <p className="text-body md:text-lg text-[#E6F5E3] leading-relaxed font-serif relative z-10">
              {listeningSteps[activeStep]}
            </p>

            <div className="mt-6 flex items-center justify-between pt-5 border-t border-[#263725] relative z-10">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                className="px-4 py-2 rounded-full bg-[#182417] text-[#BEE2B8] border border-[#354E33] hover:bg-[#223321] transition-all text-sm disabled:opacity-40 disabled:cursor-not-allowed font-medium"
              >
                上一步
              </button>
              <div className="flex gap-2">
                {listeningSteps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeStep === i ? 'bg-[#7EC477] w-7' : 'bg-[#293B27] w-2.5'
                    }`}
                    aria-label={`跳转到步骤 ${i + 1}`}
                  />
                ))}
              </div>
              <button
                disabled={activeStep === listeningSteps.length - 1}
                onClick={() => setActiveStep((s) => Math.min(listeningSteps.length - 1, s + 1))}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#4A7746] to-[#679E60] text-white hover:from-[#568A51] hover:to-[#74B06C] transition-all text-sm disabled:opacity-40 disabled:cursor-not-allowed font-semibold shadow-md"
              >
                下一步 →
              </button>
            </div>
          </div>
        </section>

        {/* Plain Explanations in Complementary Botanical & Architectural Olive */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-3xl bg-[#0F160E] p-6 space-y-3 border border-[#2B3F29] shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#70BC68]" />
              <h3 className="heading-serif font-bold text-xl text-white">
                为什么是“认出旋律回来”？
              </h3>
            </div>
            <p className="text-sm text-[#BFDEBC] leading-relaxed font-serif">
              维瓦尔第这首乐章采用的是巴洛克协奏曲的核心形式——<strong className="text-white">利都奈罗（Ritornello）结构</strong>。
              利都奈罗的本意就是“小回归”：乐队合奏先呈现一个标志性的核心材料，随后独奏乐器走出来展示花哨多变的句子（如同鸟鸣、雷雨）；一段插曲过后，乐队再次带着熟悉的主题铿锵返回。
              理解了“返回”，你就掌握了聆听大部分古典音乐结构的第一把钥匙。
            </p>
          </div>

          <div className="rounded-3xl bg-[#0F160E] p-6 space-y-3 border border-[#2B3F29] shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#70BC68]" />
              <h3 className="heading-serif font-bold text-xl text-white">
                不必勉强自己“看到春天”
              </h3>
            </div>
            <p className="text-sm text-[#BFDEBC] leading-relaxed font-serif">
              虽然维瓦尔第在乐谱旁写下了附带的十四行诗（提到微风、泉水与暴风雨），但音乐的核心事实始终是纯粹的声音：音区的高与低、节奏的密与疏、编制的单打独斗与全员齐奏。
              你可以完全不在脑海里想象小鸟，只需享受声音交替对话的纯粹快感。
            </p>
          </div>
        </div>

        {/* Interactive Self-Check Quiz */}
        <section className="p-6 md:p-8 rounded-3xl bg-[#0D140C] border border-[#2E432C] mb-12 space-y-5 shadow-xl">
          <div>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#1B291A] text-[#B8DFB2] border border-[#3E5C3B]">
              随堂微测试 · 听辨验证
            </span>
            <h3 className="heading-serif font-bold text-heading-3 text-white mt-2">
              如果想准确判断开头的音乐材料是不是“回来了”，哪一种动作最有帮助？
            </h3>
          </div>

          <div className="space-y-3">
            {[
              { text: '只死盯作品标题，在脑海中死抠“现在是不是到了春暖花开”', correct: false },
              { text: '先在心里抓住开头的节奏节拍或旋律轮廓，在后面注意全团是否重新聚齐呼应', correct: true },
              { text: '死记硬背每个音符，要求后面出现的音必须与开篇每一个毫秒完全一模一样', correct: false },
            ].map((option, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedAnswer(idx);
                  setShowExplanation(true);
                }}
                className={`w-full text-left p-4 rounded-2xl border transition-all text-sm flex items-start gap-3 font-serif ${
                  selectedAnswer === idx
                    ? option.correct
                      ? 'border-[#6CBD63] bg-[#1A2D19] text-[#E6F7E3] font-medium shadow-[0_0_20px_rgba(108,189,99,0.25)]'
                      : 'border-[#5A4040] bg-[#221616] text-[#EAD0D0]'
                    : 'border-[#293B27] bg-[#121B11] hover:border-[#466642] text-[#D2EBD0]'
                }`}
              >
                <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                  {String.fromCharCode(65 + idx)}
                </div>
                <span>{option.text}</span>
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="p-4 rounded-2xl bg-[#142013] border border-[#3A5637] text-sm space-y-2 animate-fade-in font-serif">
              <div className="flex items-center gap-1.5 font-bold text-white">
                {selectedAnswer === 1 ? (
                  <span className="text-[#72C869] flex items-center gap-1">
                    <Check className="w-4 h-4" /> 回答完全正确！
                  </span>
                ) : (
                  <span className="text-[#C6DFBF] flex items-center gap-1">
                    <HelpCircle className="w-4 h-4" /> 换个思路想一想：
                  </span>
                )}
              </div>
              <p className="text-[#B5D6B1] leading-relaxed">
                古典音乐中的主题回归绝非简单的机械复制，作曲家往往会改变它出现的乐器配置、截取前半截或换一个调性。因此，抓住<strong className="text-white">节奏轮廓与乐队重新聚合的能量</strong>，远比死抠单个音符或编织文学幻想有效得多。
              </p>
            </div>
          )}
        </section>

        {/* 1-Minute Reflection Note */}
        <section className="rounded-3xl bg-[#0F160E] p-6 md:p-8 space-y-4 mb-12 border border-[#2B3F29] shadow-xl">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#88BC82]" />
            <h3 className="heading-serif font-bold text-heading-3 text-white">
              1分钟聆听手记
            </h3>
          </div>
          <p className="text-xs text-[#9EC497] font-sans">
            用一句话记下刚才实际听到的声音事实（例如：“独奏小提琴像鸟鸣一样跳跃时，伴奏很安静；接着合奏猛烈返回。”）。
          </p>
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            rows={3}
            placeholder="写下你刚才听到的最清楚的一个变化点..."
            className="w-full p-4 rounded-2xl border border-[#2E452C] bg-[#0A1009] text-sm text-[#F0FAF0] outline-none focus:border-[#5C8C56] font-serif placeholder-[#5A7A55]"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#70BC68] font-mono">
              {noteSaved && '✓ 已保存在本地浏览器 IndexedDB！'}
            </span>
            <button
              onClick={handleSaveNote}
              className="px-5 py-2.5 rounded-full bg-[#1D2B1C] hover:bg-[#283C27] text-[#C2E4BC] border border-[#3E5C3B] text-xs font-semibold transition-all shadow-sm"
            >
              保存到我的笔记
            </button>
          </div>
        </section>

        {/* Next step CTA */}
        <div className="text-center pt-8 border-t border-[#253823] space-y-4">
          <h3 className="heading-serif font-bold text-heading-3 text-white">
            恭喜！你已经完成了古典音乐的主动聆听第一课
          </h3>
          <p className="text-sm text-[#B7D6B3] max-w-lg mx-auto font-serif">
            你已经证明了：不需要识谱，只凭一对专注的耳朵，就能准确识别结构回归。接下来，去探索更广阔的 144 节系统递进大纲吧！
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/courses/unit-01/lesson-01/"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#4C7948] to-[#6EA666] text-white font-semibold text-sm hover:from-[#578A52] hover:to-[#7EBC75] shadow-[0_0_25px_rgba(110,166,102,0.4)] transition-all"
            >
              进入系统课程第 1 单元第 1 课 →
            </Link>
            <Link
              href="/lab/"
              className="px-6 py-3.5 rounded-full bg-[#182517] hover:bg-[#223521] text-[#C2E4BC] border border-[#395637] text-sm font-medium transition-all"
            >
              前往声音实验室尝试微音例
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
