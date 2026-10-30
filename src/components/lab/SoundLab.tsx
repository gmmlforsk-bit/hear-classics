'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, Play, Square, Sparkles, HelpCircle, Layers, Gauge, Activity, Radio } from 'lucide-react';

const noteNames: Record<number, string> = {
  60: 'C4 · 261.6Hz',
  62: 'D4 · 293.7Hz',
  63: 'E♭4 · 311.1Hz',
  64: 'E4 · 329.6Hz',
  65: 'F4 · 349.2Hz',
  67: 'G4 · 392.0Hz',
  72: 'C5 · 523.3Hz',
  48: 'C3 · 130.8Hz',
  43: 'G2 · 98.0Hz',
};

export function SoundLab() {
  const [activePlay, setActivePlay] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [currentNotePitch, setCurrentNotePitch] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('物理声学就绪。点击下方音例按钮，浏览器合成器将即时震荡发声。');
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const stopSounds = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setActivePlay(null);
    setActiveStep(null);
    setCurrentNotePitch(null);
    setStatusMessage('已停止声音震荡。');
  };

  useEffect(() => {
    return () => {
      stopSounds();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const getAudioContext = async () => {
    if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      await audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playTone = (ctx: AudioContext, midi: number, start: number, duration: number, volume: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = 440 * Math.pow(2, (midi - 69) / 12);

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(volume, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + duration + 0.02);
  };

  const playExample = async (kind: string) => {
    stopSounds();
    try {
      const ctx = await getAudioContext();
      setActivePlay(kind);

      // Define tones and beats based on kind
      let melody: number[] = [];
      let beat = 0.45;
      let hasBass = false;

      if (kind === 'a') {
        melody = [60, 64, 67, 64, 60, 64, 67, 60];
        setStatusMessage('正在播放旋律 A：末尾向下回落落地...');
      } else if (kind === 'b') {
        melody = [60, 64, 67, 64, 60, 64, 67, 72];
        setStatusMessage('正在播放旋律 B：末尾向上冲起升腾...');
      } else if (kind === 'slow') {
        melody = [60, 62, 64, 65, 67, 65, 64, 60];
        beat = 0.65;
        setStatusMessage('正在播放慢速音例（行板·从容漫步）...');
      } else if (kind === 'fast') {
        melody = [60, 62, 64, 65, 67, 65, 64, 60];
        beat = 0.25;
        setStatusMessage('正在播放快速音例（急板·紧凑跃动）...');
      } else if (kind === 'melody-only') {
        melody = [60, 64, 67, 65, 64, 62, 60, 60];
        setStatusMessage('正在播放：仅有上方单旋律（缺少重力）...');
      } else if (kind === 'melody-bass') {
        melody = [60, 64, 67, 65, 64, 62, 60, 60];
        hasBass = true;
        setStatusMessage('正在播放：旋律 + 底部深厚低音地基支撑...');
      } else if (kind === 'major') {
        melody = [60, 64, 67, 72, 67, 64, 60, 60];
        setStatusMessage('正在播放：自然大调琶音（开阔清澈）...');
      } else if (kind === 'minor') {
        melody = [60, 63, 67, 72, 67, 63, 60, 60];
        setStatusMessage('正在播放：自然小调琶音（内省幽暗）...');
      }

      const now = ctx.currentTime;
      melody.forEach((note, i) => {
        playTone(ctx, note, now + i * beat, beat * 0.82, 0.14);

        if (hasBass && i % 2 === 0) {
          const bassNote = i < 4 ? 48 : 43; // C3 or G2
          playTone(ctx, bassNote, now + i * beat, beat * 1.8, 0.12);
        }

        const t = setTimeout(() => {
          setActiveStep(i);
          setCurrentNotePitch(noteNames[note] || `${note} MIDI`);
        }, i * beat * 1000);
        timeoutsRef.current.push(t);
      });

      const endTimer = setTimeout(() => {
        setActivePlay(null);
        setActiveStep(null);
        setCurrentNotePitch(null);
        setStatusMessage('播放完毕。可以切换另一组音例进行辨听对比。');
      }, (melody.length * beat + 0.2) * 1000);
      timeoutsRef.current.push(endTimer);

    } catch (e) {
      setStatusMessage('当前浏览器未授权音频或不支持 Web Audio API。');
    }
  };

  return (
    <div className="space-y-10">
      {/* Telemetry Status Bar */}
      <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#09090B]/95 backdrop-blur-xl border border-white/[0.12] shadow-xl text-white">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-zinc-300 uppercase font-bold">
                ACOUSTIC SYNTHESIS TELEMETRY
              </span>
              {currentNotePitch && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.1] text-zinc-200 border border-white/[0.15]">
                  {currentNotePitch}
                </span>
              )}
            </div>
            <p className="text-sm font-sans text-zinc-200 mt-0.5 truncate">
              {statusMessage}
            </p>
          </div>
        </div>
        {activePlay && (
          <button
            onClick={stopSounds}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-white/[0.08] hover:bg-white/[0.16] text-white transition-colors shrink-0 shadow-sm border border-white/[0.15]"
          >
            <Square className="w-3.5 h-3.5 fill-current" />
            紧急静音
          </button>
        )}
      </div>

      {/* Lab Module 1: Repetition & Variation (Verdigris Jade Theme) */}
      <section className="rounded-3xl bg-[#091512] p-6 md:p-8 space-y-6 border border-teal-700/50 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold bg-[#132A24] text-[#86D4C3] border border-teal-600/40">
              EXPERIMENT I · 翡翠声学 · 旋律轮廓与变奏
            </span>
            <h2 className="heading-serif font-bold text-2xl md:text-3xl text-white mt-3">
              同一个开头轮廓，哪里变了？
            </h2>
            <p className="text-sm md:text-base text-[#BFDDD5] mt-2 font-serif leading-relaxed">
              先听 A，再听 B。两段音乐前 7 个音完全相同，请闭上眼睛仅凭直觉注意最后 1 个音的走向：是“向下沉落”还是“向上扬起”？
            </p>
          </div>
          <Activity className="w-8 h-8 text-teal-400/70 shrink-0" />
        </div>

        {/* Visual Melody Bars with Telemetry Glow */}
        <div className="flex items-end justify-center gap-2.5 sm:gap-4 h-32 p-4 rounded-2xl bg-[#060D0B] border border-teal-900/60 shadow-inner">
          {[35, 52, 70, 52, 35, 52, 70, activePlay === 'b' ? 95 : 35].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={`w-6 sm:w-10 rounded-t-lg transition-all duration-200 relative ${
                activeStep === i
                  ? 'bg-[#5EEAD4] shadow-[0_0_20px_rgba(94,234,212,0.6)] scale-105'
                  : 'bg-teal-950/70 hover:bg-teal-900/70'
              }`}
            >
              {activeStep === i && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#5EEAD4] font-bold whitespace-nowrap">
                  STEP {i + 1}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => playExample('a')}
            className={`px-4 py-2.5 rounded-xl font-sans text-xs font-semibold flex items-center gap-2 transition-all ${
              activePlay === 'a'
                ? 'bg-teal-600 text-white font-bold shadow-[0_0_20px_rgba(20,184,166,0.4)]'
                : 'bg-[#0F221D] text-[#B8EAE0] hover:bg-[#16332C] border border-teal-800/60'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            听 A：原始句式（末音下沉落地）
          </button>
          <button
            onClick={() => playExample('b')}
            className={`px-4 py-2.5 rounded-xl font-sans text-xs font-semibold flex items-center gap-2 transition-all ${
              activePlay === 'b'
                ? 'bg-teal-600 text-white font-bold shadow-[0_0_20px_rgba(20,184,166,0.4)]'
                : 'bg-[#0F221D] text-[#B8EAE0] hover:bg-[#16332C] border border-teal-800/60'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            听 B：变奏句式（末音冲高悬念）
          </button>
          <button
            onClick={stopSounds}
            className="px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            停止发声
          </button>
        </div>

        <details className="p-4 rounded-xl bg-[#081310] text-sm text-[#A8D3C8] font-serif border border-teal-900/60">
          <summary className="font-semibold cursor-pointer text-white flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-teal-400" />
            展开声学原理剖析
          </summary>
          <p className="mt-2.5 leading-relaxed text-xs sm:text-sm text-[#BFDDD5]">
            旋律 A 的结尾回到了最稳定的根音（C4 向下回落，给人一种“说完了、落地了”的安全感）；而旋律 B 前面 7 个音一模一样，最后一个音却跳升到了高八度（C5 向上冲起，制造了强烈的未完感与期待）。
            <br />
            我们在古典音乐里所谓“听懂结构”，起点正是这种能力：一边认出它和前面材料的联系（重复），一边精准听出它在哪个细节点发生了位移（变化）。
          </p>
        </details>
      </section>

      {/* Lab Module 2: Tempo vs Rhythm (Celestial Sapphire Blue Theme) */}
      <section className="rounded-3xl bg-[#0A1220] p-6 md:p-8 space-y-6 border border-blue-700/50 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold bg-[#111F36] text-[#93BEE8] border border-blue-600/40">
              EXPERIMENT II · 天青声学 · 速度与节奏
            </span>
            <h2 className="heading-serif font-bold text-2xl md:text-3xl text-white mt-3">
              节奏没换，换个速度完全不同
            </h2>
            <p className="text-sm md:text-base text-[#BBD7F5] mt-2 font-serif leading-relaxed">
              这两段采用了完全相同的音高顺序和音符长短比例，唯一的变量是播放时的整体快慢（速度）。试着跟着用手指轻敲桌面数拍。
            </p>
          </div>
          <Gauge className="w-8 h-8 text-blue-400/70 shrink-0" />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => playExample('slow')}
            className={`px-4 py-2.5 rounded-xl font-sans text-xs font-semibold flex items-center gap-2 transition-all ${
              activePlay === 'slow'
                ? 'bg-blue-600 text-white font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                : 'bg-[#0D1A2E] text-[#B8D5F5] hover:bg-[#132542] border border-blue-800/60'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            听：行板慢速（每分钟 92 拍·步态安详）
          </button>
          <button
            onClick={() => playExample('fast')}
            className={`px-4 py-2.5 rounded-xl font-sans text-xs font-semibold flex items-center gap-2 transition-all ${
              activePlay === 'fast'
                ? 'bg-blue-600 text-white font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                : 'bg-[#0D1A2E] text-[#B8D5F5] hover:bg-[#132542] border border-blue-800/60'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            听：急板快速（每分钟 240 拍·心跳跃动）
          </button>
          <button
            onClick={stopSounds}
            className="px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            停止发声
          </button>
        </div>

        <details className="p-4 rounded-xl bg-[#070D17] text-sm text-[#A5C8EE] font-serif border border-blue-900/60">
          <summary className="font-semibold cursor-pointer text-white flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            展开声学原理剖析
          </summary>
          <p className="mt-2.5 leading-relaxed text-xs sm:text-sm text-[#BBD7F5]">
            很多人容易把“节奏”和“速度”混为一谈。速度是整体流逝的物理快慢（如每分钟 60 拍与 140 拍）；而节奏是长音、短音与重音之间的组织逻辑。
            <br />
            把同一段节奏加速，并不等于换了一段新旋律；同时在古典音乐中，快速不一定等于“高兴”，慢速也不代表“悲伤”，它首先改变的是身体感受到的律动密度与呼吸深度。
          </p>
        </details>
      </section>

      {/* Lab Module 3: Texture & Bass Layers (Venetian Manuscript Amber Gold Theme) */}
      <section className="rounded-3xl bg-[#161109] p-6 md:p-8 space-y-6 border border-amber-700/50 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold bg-[#281D10] text-[#E5CA88] border border-amber-600/40">
              EXPERIMENT III · 泥金声学 · 织体与低音声部
            </span>
            <h2 className="heading-serif font-bold text-2xl md:text-3xl text-white mt-3">
              把注意力移到最下面：听见地基
            </h2>
            <p className="text-sm md:text-base text-[#EAD8B2] mt-2 font-serif leading-relaxed">
              初听古典乐最常犯的习惯是“只追着最高最亮的旋律跑”。现在，先听只有旋律的版本；再听加入了低音声部的版本，尝试专门留意底部深沉的声音何时变动。
            </p>
          </div>
          <Layers className="w-8 h-8 text-amber-400/70 shrink-0" />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => playExample('melody-only')}
            className={`px-4 py-2.5 rounded-xl font-sans text-xs font-semibold flex items-center gap-2 transition-all ${
              activePlay === 'melody-only'
                ? 'bg-amber-600 text-white font-bold shadow-[0_0_20px_rgba(217,119,6,0.4)]'
                : 'bg-[#1F170C] text-[#F3E2BD] hover:bg-[#2C2111] border border-amber-800/60'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            听：仅有单线条旋律
          </button>
          <button
            onClick={() => playExample('melody-bass')}
            className={`px-4 py-2.5 rounded-xl font-sans text-xs font-semibold flex items-center gap-2 transition-all ${
              activePlay === 'melody-bass'
                ? 'bg-amber-600 text-white font-bold shadow-[0_0_20px_rgba(217,119,6,0.4)]'
                : 'bg-[#1F170C] text-[#F3E2BD] hover:bg-[#2C2111] border border-amber-800/60'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            听：旋律 + 低音地基（重力感建立）
          </button>
          <button
            onClick={stopSounds}
            className="px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            停止发声
          </button>
        </div>

        <details className="p-4 rounded-xl bg-[#0F0C06] text-sm text-[#DFCE9F] font-serif border border-amber-900/60">
          <summary className="font-semibold cursor-pointer text-white flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            展开声学原理剖析
          </summary>
          <p className="mt-2.5 leading-relaxed text-xs sm:text-sm text-[#EAD8B2]">
            加入低音后，整段旋律突然拥有了立体的空间深度与重力感。低音就像建筑的地基：它不仅锚定了调性重心，还决定了和声的呼吸换气点。
            <br />
            在听交响乐或四重奏时，当你能够随意将注意力“自由切换到大提琴与低音提琴声部”，你的古典音乐听觉就真正迈入了专业殿堂。
          </p>
        </details>
      </section>

      {/* Lab Module 4: Major vs Minor Color (Velvet Opera Bordeaux Crimson Theme) */}
      <section className="rounded-3xl bg-[#180B12] p-6 md:p-8 space-y-6 border border-rose-700/50 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold bg-[#2D1220] text-[#EAA6B8] border border-rose-600/40">
              EXPERIMENT IV · 波尔多声学 · 调性色彩与光影
            </span>
            <h2 className="heading-serif font-bold text-2xl md:text-3xl text-white mt-3">
              只挪动半个音，色彩瞬间明灭
            </h2>
            <p className="text-sm md:text-base text-[#ECC2CE] mt-2 font-serif leading-relaxed">
              分别听大调琶音与小调琶音。注意：两者的头尾音符（C音与G音）完全相同，仅仅把中间那颗“三音”向下降低了半个音阶（E4 降到 E♭4），整个听觉空间立刻从晴空万里变为微云遮日。
            </p>
          </div>
          <Sparkles className="w-8 h-8 text-rose-400/70 shrink-0" />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => playExample('major')}
            className={`px-4 py-2.5 rounded-xl font-sans text-xs font-semibold flex items-center gap-2 transition-all ${
              activePlay === 'major'
                ? 'bg-rose-600 text-white font-bold shadow-[0_0_20px_rgba(225,29,72,0.4)]'
                : 'bg-[#220E19] text-[#F5C4D2] hover:bg-[#311424] border border-rose-800/60'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            听：大调琶音（开阔清澈 · 大三度）
          </button>
          <button
            onClick={() => playExample('minor')}
            className={`px-4 py-2.5 rounded-xl font-sans text-xs font-semibold flex items-center gap-2 transition-all ${
              activePlay === 'minor'
                ? 'bg-rose-600 text-white font-bold shadow-[0_0_20px_rgba(225,29,72,0.4)]'
                : 'bg-[#220E19] text-[#F5C4D2] hover:bg-[#311424] border border-rose-800/60'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            听：小调琶音（内省幽暗 · 小三度）
          </button>
          <button
            onClick={stopSounds}
            className="px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            停止发声
          </button>
        </div>

        <details className="p-4 rounded-xl bg-[#11070C] text-sm text-[#E6A6B8] font-serif border border-rose-900/60">
          <summary className="font-semibold cursor-pointer text-white flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-rose-400" />
            展开声学原理剖析
          </summary>
          <p className="mt-2.5 leading-relaxed text-xs sm:text-sm text-[#ECC2CE]">
            西方调性音乐的核心基石就是大小调二元性。大三度（4个半音）给人开阔、坚实、阳光的色彩；小三度（3个半音）则带来柔和、忧郁或神秘的阴影。
            <br />
            在舒伯特、莫扎特的作品中，同一个旋律经常前一句大调、后一句立刻换成小调，如同阳光穿过云层的瞬间变幻。
          </p>
        </details>
      </section>
    </div>
  );
}
