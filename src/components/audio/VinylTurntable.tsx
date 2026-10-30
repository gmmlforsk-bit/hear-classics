'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, Disc3, Radio, Flame } from 'lucide-react';

interface VinylTurntableProps {
  title?: string;
  composer?: string;
  opus?: string;
  audioSrc?: string;
  artist?: string;
}

const listeningMoments = [
  { time: 0, label: '0:00 全奏主部 · 春回大地（Ritornello）' },
  { time: 32, label: '0:32 独奏小提琴 · 鸟鸣啾啾' },
  { time: 70, label: '1:10 弱音合奏 · 溪流潺潺' },
  { time: 102, label: '1:42 爆发震音 · 怒涛春雷' },
  { time: 140, label: '2:20 晴空复苏 · 歌鸟重现' },
];

export function VinylTurntable({
  title = '《四季·春》第 1 乐章（快板）',
  composer = '安东尼奥·维瓦尔第',
  opus = 'RV 269 · E 大调小提琴协奏曲',
  audioSrc = '/audio/spring-harrison.mp3',
  artist = '独奏: John Harrison · 指挥: Robert Turizziani · Wichita State Players',
}: VinylTurntableProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
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

  const seek = (fraction: number) => {
    if (audioRef.current && duration > 0) {
      audioRef.current.currentTime = fraction * duration;
    }
  };

  const jumpToTime = (secs: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = secs;
      if (!isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  // Approaching Ritornello return check for radar glow (e.g. at 0s, 70s, 140s)
  const isNearRitornello = (currentTime >= 0 && currentTime < 15) || 
                           (currentTime >= 65 && currentTime < 78) || 
                           (currentTime >= 135 && currentTime < 150);

  return (
    <div className="relative rounded-3xl bg-[#0D150E] text-white border border-[#2D422C] shadow-[0_20px_50px_rgba(10,20,12,0.9)] overflow-hidden transition-all duration-300 p-6 sm:p-8 backdrop-blur-2xl passepartout-frame">
      {/* Luxurious Olive Ambient Spring Spotlight */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#4A7246]/22 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#2F4A2C]/25 blur-3xl pointer-events-none" />

      {/* Header Plaque with Vacuum Tube & Hi-Fi Archival Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-[#2A3E29]/80 gap-3">
        <div className="flex items-center gap-3">
          {/* Miniature Vacuum Tube 12AX7 Simulation (点 99) */}
          <div className="relative w-5 h-8 rounded-t-full bg-gradient-to-b from-white/30 via-amber-950/40 to-zinc-900 border border-amber-500/40 p-0.5 flex flex-col items-center justify-end overflow-hidden shadow-inner shrink-0">
            <div
              className={`w-2 h-4 rounded-full transition-all duration-700 ${
                isPlaying ? 'bg-amber-400 tube-filament' : 'bg-amber-900/40 opacity-30'
              }`}
            />
            <div className="w-3.5 h-1 bg-zinc-700 rounded-b mt-0.5" />
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-widest text-[#B4DDB0] uppercase font-semibold flex items-center gap-1.5">
              <span>PASTORAL SALON · 橄榄绿四季电声播放台</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono font-bold">
                TUBE 12AX7
              </span>
            </span>
            <span className="text-[9px] text-[#7EA678] font-mono">
              {isPlaying ? '● 真空电子管温热通电中 · 44.1kHz 纯净模拟发声' : '○ 电子管待机中 · 点击唱盘即刻启程'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isNearRitornello && isPlaying && (
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/50 animate-pulse font-bold">
              ★ 旋律即将回归
            </span>
          )}
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#182517] text-[#A6D6A0] border border-[#375235] backdrop-blur-sm font-semibold">
            CC BY-SA 4.0 官方正版录音
          </span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left: Realistic Vinyl Record Simulation with Fresnel Sheen & Ritornello Radar (点 71, 73) */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center">
            {/* Concentric Ritornello Radar Ring (点 73) */}
            <div
              className={`absolute inset-0 rounded-full border border-[#52804D]/40 pointer-events-none transition-all duration-700 ${
                isPlaying ? (isNearRitornello ? 'ritornello-radar border-[#A8E2A0]' : 'border-[#40683C]/30') : 'opacity-0'
              }`}
            />

            {/* The Vinyl Disc with Fresnel Butterfly Reflection (点 71) */}
            <div
              className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#070D08] p-2.5 shadow-2xl border-4 border-[#1B291A] vinyl-fresnel transition-transform duration-700 relative ${
                isPlaying ? 'animate-[spin_9s_linear_infinite]' : ''
              }`}
            >
              {/* Concentric grooves sheen */}
              <div className="w-full h-full rounded-full border border-[#3C5839]/40 flex items-center justify-center">
                {/* Center Record Label in Museum Olive Gold */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#1C2C1A] via-[#152313] to-[#0E180D] border-2 border-[#64965C] flex flex-col items-center justify-center p-2 text-center shadow-lg relative">
                  <div className="text-[8px] font-mono tracking-widest text-[#93C98E] uppercase font-bold">
                    PASTORAL
                  </div>
                  <div className="text-[10px] font-serif font-bold text-[#E5F5E2] truncate max-w-[70px]">
                    四季·春
                  </div>
                  <div className="text-[7px] font-mono text-[#8BBF86]">
                    Vivaldi · RV269
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#070D08] border border-[#64965C] mt-1" />
                </div>
              </div>
            </div>

            {/* Turntable Tone Arm with Needle Physics (点 35) */}
            <div
              className={`absolute -top-3 -right-3 w-16 h-28 pointer-events-none transition-transform duration-700 origin-top-right ${
                isPlaying ? 'rotate-12' : '-rotate-6'
              }`}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#C8DAC4] border-2 border-[#54734F] shadow-md ml-auto" />
              <div className="w-1 h-20 bg-gradient-to-b from-[#C8DAC4] via-[#8EAD88] to-[#466641] shadow ml-auto mr-1 -mt-1 rounded-full" />
              <div className="w-3 h-4 bg-[#192718] border border-[#52774C] rounded-sm ml-auto mr-0 -mt-1 shadow flex items-center justify-center">
                <div
                  className={`w-1 h-1 rounded-full ${
                    isPlaying ? 'bg-[#76CE6C] animate-ping' : 'bg-[#4B6846]'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Audio Controls & Details */}
        <div className="md:col-span-7 space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#1A2919] text-[#BCE6B7] border border-[#446640] font-semibold">
                第 1 单元第 1 课 · 焦点全本实装
              </span>
              <span className="text-xs font-mono text-[#8EB887]">{opus}</span>
            </div>
            <h3 className="heading-serif font-bold text-xl sm:text-2xl text-[#F2FAF0]">
              {title}
            </h3>
            <p className="text-xs text-[#C6E6C0] font-serif font-medium mt-0.5">
              {composer}
            </p>
            <p className="text-[11px] text-[#86AA80] font-mono mt-1 line-clamp-1">
              {artist}
            </p>
          </div>

          {/* Continuous Fluid Acoustic Waveform Visualizer (点 36, 72) */}
          <div className="p-3.5 rounded-2xl bg-[#091009]/90 border border-[#2B402A] backdrop-blur-md">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#9BC796] mb-2">
              <span className="flex items-center gap-1.5">
                <Radio className={`w-3.5 h-3.5 ${isPlaying ? 'text-[#76CE6C] animate-pulse' : 'text-[#4F734A]'}`} />
                <span className="font-semibold">交响泛音流体声波 (Harmonic Fluid Wave)</span>
              </span>
              <span className="text-[#C6E8C2] text-[10px]">
                {isPlaying ? '44.1 kHz · 立体声连续震荡' : '待机中 · 点击播放'}
              </span>
            </div>

            {/* Smooth 24-band Harmonic Fluid Waveform */}
            <div className="h-12 flex items-end gap-1 px-1">
              {[20, 45, 75, 55, 90, 65, 80, 45, 95, 70, 85, 40, 75, 90, 60, 80, 50, 95, 65, 40, 85, 55, 30, 70].map(
                (h, i) => {
                  const dynamicHeight = isPlaying
                    ? `${Math.max(15, (h + Math.sin(currentTime * 4 + i * 0.4) * 35))}%`
                    : '16%';
                  return (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all duration-100"
                      style={{
                        height: dynamicHeight,
                        background: isPlaying
                          ? `linear-gradient(to top, rgba(28, 44, 26, 0.5), rgba(65, 102, 62, 0.8), rgba(110, 154, 105, 0.95))`
                          : '#152014',
                      }}
                    />
                  );
                }
              )}
            </div>
          </div>

          {/* Progress Bar in Olive Leaf Gradient */}
          <div className="space-y-1.5">
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const frac = (e.clientX - rect.left) / rect.width;
                seek(Math.max(0, Math.min(1, frac)));
              }}
              className="h-2 rounded-full bg-[#141E13] cursor-pointer overflow-hidden relative group border border-[#253723]"
            >
              <div
                className="h-full bg-gradient-to-r from-[#2A4228] via-[#436640] to-[#6C9668] transition-all duration-200"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-[#8BB186]">
              <span>{formatTime(currentTime)}</span>
              <span>{duration > 0 ? formatTime(duration) : '3:20'}</span>
            </div>
          </div>

          {/* Controls Bar in Olive Green with Tactile Knurled Feedback (点 94) */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-[#243722] hover:bg-[#2F472D] text-[#E2EFE1] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:scale-102 active:scale-98 transition-all border border-[#3E5C3A]"
                title={isPlaying ? '暂停' : '播放'}
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 ml-0.5 fill-current" />}
              </button>

              <button
                onClick={() => jumpToTime(0)}
                className="p-2.5 rounded-full bg-[#1B291A] hover:bg-[#253A24] text-[#BEE2B9] border border-[#395637] transition-colors"
                title="重头开始"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="p-2.5 rounded-full bg-[#1B291A] hover:bg-[#253A24] text-[#BEE2B9] border border-[#395637] transition-colors"
                title={isMuted ? '取消静音' : '静音'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-[#759E70]" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <span className="text-[11px] font-mono text-[#8EB887] hidden sm:inline">
              安东尼奥·维瓦尔第 · 1725 年阿姆斯特丹出版
            </span>
          </div>
        </div>
      </div>

      {/* 5-Theme Quick Jump Bar */}
      <div className="relative z-10 mt-6 pt-5 border-t border-[#253823]">
        <div className="text-[11px] font-mono text-[#A8D3A3] mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#73BA6A]" />
          <span>核心听觉动作即时跃迁（点击即听该段）：</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {listeningMoments.map((m, idx) => (
            <button
              key={idx}
              onClick={() => jumpToTime(m.time)}
              className="text-xs px-3 py-1.5 rounded-xl bg-[#142013] hover:bg-[#20331F] border border-[#2F472D] hover:border-[#537C50] text-[#B9E0B4] hover:text-white transition-all font-mono shadow-sm"
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Actual Audio Element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />
    </div>
  );
}
