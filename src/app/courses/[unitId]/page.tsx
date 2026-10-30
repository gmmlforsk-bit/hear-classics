import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allUnits } from '@/lib/data';
import { ArrowLeft, ArrowRight, Play, BookOpen, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export function generateStaticParams() {
  return allUnits.map((unit) => ({
    unitId: unit.id,
  }));
}

export default function UnitOverviewPage({ params }: { params: { unitId: string } }) {
  const unit = allUnits.find((u) => u.id === params.unitId);
  if (!unit) notFound();

  const unitIndex = allUnits.findIndex((u) => u.id === params.unitId);
  const prevUnit = unitIndex > 0 ? allUnits[unitIndex - 1] : null;
  const nextUnit = unitIndex < allUnits.length - 1 ? allUnits[unitIndex + 1] : null;

  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  const roman = romanNumerals[unit.number - 1] || String(unit.number);

  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="content-area">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <Link href="/courses/" className="hover:text-zinc-200 transition-colors">
            系统课程大纲
          </Link>
          <span>/</span>
          <span className="text-zinc-300 font-semibold">第 {unit.number} 单元 · 阶梯总览</span>
        </div>

        {/* Monumental Unit Hero Card */}
        <div className="relative overflow-hidden rounded-3xl bg-[#090A0E] rim-light-bevel p-8 sm:p-12 mb-12 shadow-2xl">
          {/* Dedicated Unit Artwork Background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105"
            style={{ backgroundImage: `url('/images/units/${unit.id}.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0E] via-[#090A0E]/85 to-[#090A0E]/40" />

          {/* Foreground Hero Content */}
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#14151C] text-amber-200/90 border border-amber-500/30">
                UNIT {roman} · 第 {unit.number} 单元
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.08]">
                共 {unit.lessons.length} 讲实证阶梯
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.08]">
                约 360 分钟深度沉浸
              </span>
            </div>

            <h1 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-white font-serif font-bold">
              {unit.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-serif leading-relaxed">
              {unit.description}
            </p>

            {/* Quick Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/courses/${unit.id}/${unit.lessons[0].id}/`}
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              >
                <Play className="w-4 h-4 fill-current" />
                开启本单元第 1 讲 ({unit.lessons[0].title})
              </Link>
              <Link
                href="/courses/"
                className="btn-secondary inline-flex items-center gap-2 px-5 py-3 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                查看 12 单元全景
              </Link>
            </div>
          </div>
        </div>

        {/* 12-Lesson Detailed Syllabus Matrix */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-zinc-400" />
              单元课程详细大纲 (全 {unit.lessons.length} 讲)
            </h2>
            <span className="text-xs font-mono text-zinc-400">
              每课均含：听前定向 · 声音动作 · 实操检验
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {unit.lessons.map((lesson, idx) => (
              <Link
                key={lesson.id}
                href={`/courses/${unit.id}/${lesson.id}/`}
                className="group relative rounded-2xl bg-[#090A0E] border border-white/[0.06] hover:border-white/[0.25] p-5 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-white/[0.05] text-zinc-400 font-bold border border-white/[0.06]">
                      课时 {String(lesson.lessonNumber).padStart(2, '0')} / 12
                    </span>
                    <span className="flex items-center gap-1 text-zinc-500">
                      <Clock className="w-3.5 h-3.5" />
                      约 {lesson.standardTime || 25} 分钟
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-zinc-100 group-hover:text-amber-200/90 transition-colors leading-snug">
                    {lesson.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-serif line-clamp-2 leading-relaxed">
                    {lesson.oneLineGoal}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    作品：{lesson.workIdentity?.workId || '实证精选片段'}
                  </span>
                  <span className="inline-flex items-center gap-1 text-zinc-300 font-sans group-hover:text-white group-hover:translate-x-0.5 transition-all">
                    进入导听
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Unit Review & Capstone Insight */}
        {unit.reviewContent && (
          <div className="rounded-2xl bg-[#0C0D12] border border-white/[0.08] p-6 sm:p-8 mb-12 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-200/80 uppercase tracking-widest font-bold">
              <Sparkles className="w-4 h-4 text-amber-300/80" />
              单元听觉沉淀与毕业心法
            </div>
            <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed">
              {unit.reviewContent}
            </p>
          </div>
        )}

        {/* Previous / Next Unit Navigation */}
        <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between text-sm">
          {prevUnit ? (
            <Link
              href={`/courses/${prevUnit.id}/`}
              className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>上一单元：{prevUnit.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextUnit ? (
            <Link
              href={`/courses/${nextUnit.id}/`}
              className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <span>下一单元：{nextUnit.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
