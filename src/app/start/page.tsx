'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Headphones, Check, ArrowRight, ShieldCheck, Sparkles, Disc3, Radio, Sprout } from 'lucide-react';
import { savePreferences } from '@/lib/storage';
import { MusicPlatform } from '@/lib/types';

export default function StartPage() {
  const router = useRouter();
  const [platform, setPlatform] = useState<MusicPlatform>('apple-music');
  const [hasSub, setHasSub] = useState<boolean>(true);

  const handleSelect = async (p: MusicPlatform, sub: boolean) => {
    setPlatform(p);
    setHasSub(sub);
    await savePreferences({
      musicPlatform: p,
      hasSubscription: sub,
    });
  };

  const handleContinue = async () => {
    await savePreferences({
      musicPlatform: platform,
      hasSubscription: hasSub,
    });
    router.push('/courses/unit-01/lesson-01/');
  };

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="reading-area">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-3">
            <span className="tag font-bold">开启你的古典之旅</span>
          </div>
          <h1 className="heading-serif text-heading-1 md:text-display-2 text-zinc-900 dark:text-zinc-50">
            你打算在哪里听音乐？
          </h1>
          <p className="mt-3 text-body text-zinc-600 dark:text-zinc-300 font-serif">
            无论你使用哪个平台，甚至没有任何会员，都有完整可行的学习路线。随时可以在设置中更改。
          </p>

          {/* Quick Direct Play CTA banner in Olive Green Theme for 《四季·春》 */}
          <div className="mt-8 p-6 rounded-3xl bg-[#0F160E] border border-[#2F452D] flex flex-col sm:flex-row items-center justify-between gap-5 text-left shadow-[0_12px_35px_rgba(10,20,12,0.6)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#4C7546]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#1C2C1B] text-[#BEE2B8] border border-[#3E5F3B]">
                  <Sprout className="w-3 h-3 text-[#76CE6C]" />
                  官方完整录音 · 橄榄绿春季播放席
                </span>
              </div>
              <div className="font-serif font-bold text-lg text-white flex items-center gap-2">
                想现在直接听？维瓦尔第《四季·春》已就绪
              </div>
              <p className="text-xs text-[#A8CEA2] mt-1 font-serif leading-relaxed">
                无需切换任何 App，第一乐章真实正版录音已直接内嵌，点击即可在橄榄绿电声席开启零门槛实证导听。
              </p>
            </div>

            <Link
              href="/start/first-listen/"
              className="relative z-10 px-6 py-3 rounded-full bg-gradient-to-r from-[#4C7948] to-[#6EA666] text-white hover:from-[#578A52] hover:to-[#7EBC75] text-xs font-semibold shrink-0 flex items-center gap-1.5 shadow-[0_0_20px_rgba(110,166,102,0.4)] transition-all font-sans"
            >
              立刻开启首听
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {/* Option 1: Apple Music */}
          <button
            onClick={() => handleSelect('apple-music', true)}
            className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
              platform === 'apple-music'
                ? 'border-blue-600 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-950/20 shadow-md ring-1 ring-blue-500/30'
                : 'border-zinc-200 dark:border-white/10 bg-white dark:bg-[#121316] hover:border-zinc-400 dark:hover:border-white/20'
            }`}
          >
            <div className={`p-3 rounded-full mt-1 ${platform === 'apple-music' ? 'bg-blue-600 text-white' : 'bg-zinc-100 dark:bg-white/[0.08] text-zinc-500 dark:text-zinc-400'}`}>
              <Headphones className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="heading-serif font-bold text-lg text-zinc-900 dark:text-zinc-100">
                  我有 Apple Music / Classical
                </h3>
                {platform === 'apple-music' && <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-serif">
                推荐选择。课程将直接提供 Apple Music 与 Apple Music Classical 对应专辑的准确检索与跳转入口。
              </p>
            </div>
          </button>

          {/* Option 2: Other platforms */}
          <button
            onClick={() => handleSelect('other', true)}
            className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
              platform === 'other'
                ? 'border-emerald-600 dark:border-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-md ring-1 ring-emerald-500/30'
                : 'border-zinc-200 dark:border-white/10 bg-white dark:bg-[#121316] hover:border-zinc-400 dark:hover:border-white/20'
            }`}
          >
            <div className={`p-3 rounded-full mt-1 ${platform === 'other' ? 'bg-emerald-600 text-white' : 'bg-zinc-100 dark:bg-white/[0.08] text-zinc-500 dark:text-zinc-400'}`}>
              <Radio className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="heading-serif font-bold text-lg text-zinc-900 dark:text-zinc-100">
                  我使用网易云 / QQ音乐 / Spotify / Bilibili
                </h3>
                {platform === 'other' && <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-serif">
                我们为每节课提供标准唱片编号、录音年份与一键复制搜索词，方便你在任何音乐平台精准找到同一版本。
              </p>
            </div>
          </button>

          {/* Option 3: Free / Public Domain */}
          <button
            onClick={() => handleSelect('free', false)}
            className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
              platform === 'free'
                ? 'border-amber-600 dark:border-amber-400 bg-amber-50/50 dark:bg-amber-950/20 shadow-md ring-1 ring-amber-500/30'
                : 'border-zinc-200 dark:border-white/10 bg-white dark:bg-[#121316] hover:border-zinc-400 dark:hover:border-white/20'
            }`}
          >
            <div className={`p-3 rounded-full mt-1 ${platform === 'free' ? 'bg-amber-600 text-white' : 'bg-zinc-100 dark:bg-white/[0.08] text-zinc-500 dark:text-zinc-400'}`}>
              <Disc3 className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="heading-serif font-bold text-lg text-zinc-900 dark:text-zinc-100">
                  我没有付费会员 / 想找免费公版资源
                </h3>
                {platform === 'free' && <Check className="w-5 h-5 text-amber-600 dark:text-amber-400" />}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-serif">
                我们为你专门规划了 24 节公版免费合法音源路线（IMSLP、Musopen、维基共享资源），不花一分钱也能系统入门。
              </p>
            </div>
          </button>
        </div>

        {/* Continue Button */}
        <div className="mt-10 text-center">
          <button
            onClick={handleContinue}
            className="btn-primary px-8 py-3.5 text-sm"
          >
            保存并进入第一课 →
          </button>
          <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            设置将安全保存在你的本地浏览器（IndexedDB），绝不上传云端，充分保护个人隐私。
          </div>
        </div>
      </div>
    </div>
  );
}
