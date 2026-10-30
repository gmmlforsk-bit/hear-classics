import { SoundLab } from '@/components/lab/SoundLab';
import Link from 'next/link';
import { ArrowLeft, Headphones, Radio } from 'lucide-react';

export const metadata = {
  title: '声音实验室 · 听见古典',
  description: '不用识谱，无需外部音频，用浏览器即时合成的交互微音例，直接体验旋律变奏、速度变化、织体分层与和声色彩。',
};

export default function SoundLabPage() {
  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="content-area max-w-4xl">
        {/* Navigation & Header */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted dark:text-paper-400 hover:text-wine mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          返回首页
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="tag flex items-center gap-1">
              <Radio className="w-3 h-3 text-wine animate-pulse" />
              互动练耳与结构感知
            </span>
            <span className="tag">免网络加载 · 纯前端即时合成</span>
          </div>
          <h1 className="heading-serif text-heading-1 md:text-display-2 text-ink dark:text-paper-100">
            声音实验室 (Sound Lab)
          </h1>
          <p className="mt-3 text-body text-ink-muted dark:text-paper-300 leading-relaxed max-w-2xl">
            先用耳朵听见声音的变化，再给它起名字。这里是专门为零基础听众设计的交互式声音实验，使用 Web Audio 实时振荡器生成纯净音例，直观体验音乐形式的底层奥秘。
          </p>
        </div>

        {/* The Sound Lab Interactive Component */}
        <SoundLab />

        {/* Footer recommendation */}
        <div className="mt-12 p-6 rounded-card bg-paper-100 dark:bg-ink-light border border-paper-300 dark:border-ink-muted text-center space-y-3">
          <h3 className="font-serif font-bold text-heading-4 text-ink dark:text-paper-100">
            想把实验室里学到的听觉动作，放到真实名作中验证？
          </h3>
          <p className="text-sm text-ink-muted dark:text-paper-300 max-w-lg mx-auto">
            我们准备了免费首听体验《春》（维瓦尔第，无需会员直接播放），以及涵盖 144 节递进大纲的完整系统课程。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/start/first-listen/" className="btn-primary flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              进入《春》免会员首听体验
            </Link>
            <Link href="/courses/" className="btn-secondary">
              浏览 144 节系统课程
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
