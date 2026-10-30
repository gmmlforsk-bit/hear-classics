'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Headphones,
  ExternalLink,
  CheckCircle2,
  Circle,
  RotateCcw,
  BookmarkPlus,
  PenLine,
  Eye,
  Copy,
  Check,
} from 'lucide-react';
import type { Lesson, Exercise } from '@/lib/types';

interface LessonPageProps {
  lesson: Lesson;
  prevLesson?: { id: string; title: string } | null;
  nextLesson?: { id: string; title: string } | null;
  unitTitle: string;
}

type LessonStep =
  | 'overview'
  | 'pre-listening'
  | 'first-listen'
  | 'second-listen'
  | 'explanation'
  | 'exercise'
  | 'transfer'
  | 'record'
  | 'review';

const stepLabels: Record<LessonStep, string> = {
  overview: '课程概览',
  'pre-listening': '听前准备',
  'first-listen': '第一遍聆听',
  'second-listen': '第二遍聆听',
  explanation: '解释与术语',
  exercise: '练习',
  transfer: '迁移任务',
  record: '聆听记录',
  review: '复习与延伸',
};

const stepOrder: LessonStep[] = [
  'overview',
  'pre-listening',
  'first-listen',
  'second-listen',
  'explanation',
  'exercise',
  'transfer',
  'record',
  'review',
];

export function LessonPage({
  lesson,
  prevLesson,
  nextLesson,
  unitTitle,
}: LessonPageProps) {
  const [currentStep, setCurrentStep] = useState<LessonStep>('overview');
  const [isCompleted, setIsCompleted] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [whatHeard, setWhatHeard] = useState('');
  const [uncertain, setUncertain] = useState('');
  const [nextFocus, setNextFocus] = useState('');
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({});
  const [copiedSearch, setCopiedSearch] = useState(false);

  const currentStepIndex = stepOrder.indexOf(currentStep);

  const goToStep = useCallback((step: LessonStep) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goNext = () => {
    if (currentStepIndex < stepOrder.length - 1) {
      goToStep(stepOrder[currentStepIndex + 1]);
    }
  };

  const goPrev = () => {
    if (currentStepIndex > 0) {
      goToStep(stepOrder[currentStepIndex - 1]);
    }
  };

  const handleComplete = () => {
    setIsCompleted(true);
    // In production, this would save to IndexedDB
  };

  const handleUndoComplete = () => {
    setIsCompleted(false);
  };

  const handleCopySearch = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSearch(true);
    setTimeout(() => setCopiedSearch(false), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Top navigation bar */}
      <div className="sticky top-16 z-30 bg-paper-100/95 dark:bg-ink/95 backdrop-blur-sm border-b border-paper-300 dark:border-ink-light">
        <div className="content-area">
          <div className="flex items-center justify-between h-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-small text-ink-subtle dark:text-paper-400 min-w-0">
              <Link href="/courses/" className="hover:text-prussian dark:hover:text-gold-light shrink-0">
                课程
              </Link>
              <ChevronRight className="w-3 h-3 shrink-0" />
              <Link
                href={`/courses/unit-${String(lesson.unitNumber).padStart(2, '0')}/`}
                className="hover:text-prussian dark:hover:text-gold-light truncate"
              >
                {unitTitle}
              </Link>
              <ChevronRight className="w-3 h-3 shrink-0" />
              <span className="text-ink dark:text-paper-200 truncate font-medium">
                第 {lesson.globalNumber} 节
              </span>
            </div>

            {/* Completion status */}
            <div className="flex items-center gap-2 shrink-0">
              {isCompleted ? (
                <button
                  onClick={handleUndoComplete}
                  className="flex items-center gap-1.5 text-small text-sage hover:text-sage-dark transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="hidden sm:inline">已完成</span>
                  <span className="hidden sm:inline text-ink-subtle dark:text-paper-400">
                    · 撤销
                  </span>
                </button>
              ) : (
                <button
                  onClick={handleComplete}
                  className="flex items-center gap-1.5 text-small text-ink-muted dark:text-paper-400 hover:text-sage transition-colors"
                >
                  <Circle className="w-4 h-4" />
                  <span className="hidden sm:inline">标记完成</span>
                </button>
              )}
            </div>
          </div>

          {/* Step indicator */}
          <div className="flex gap-1 pb-2 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {stepOrder.map((step, idx) => (
              <button
                key={step}
                onClick={() => goToStep(step)}
                className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${
                  step === currentStep
                    ? 'bg-prussian text-white dark:bg-gold dark:text-ink-deep font-bold shadow-sm'
                    : idx < currentStepIndex
                    ? 'bg-gold-50 text-gold-dark dark:bg-gold-dark/30 dark:text-gold-light'
                    : 'bg-paper-200 text-ink-subtle dark:bg-ink-light dark:text-paper-400 hover:bg-paper-300'
                }`}
                aria-current={step === currentStep ? 'step' : undefined}
              >
                {stepLabels[step]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content area with sidebar */}
      <div className="content-area py-8 lg:py-12">
        <div className="lg:flex lg:gap-12">
          {/* Main content */}
          <article className="flex-1 max-w-reading">
            {/* Step: Overview */}
            {currentStep === 'overview' && (
              <div className="animate-fade-in">
                {/* Visual Museum Passepartout Banner */}
                <div className="relative rounded-2xl overflow-hidden mb-6 border border-paper-300 dark:border-white/[0.1] shadow-lg group">
                  <div
                    className="h-44 sm:h-52 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('/images/units/unit-${String(lesson.unitNumber).padStart(2, '0')}.jpg')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-400/20 text-amber-200 border border-amber-400/30">
                        第 {lesson.unitNumber} 单元 · 实景视听讲义
                      </span>
                      <span className="text-xs font-mono text-zinc-300">
                        第 {lesson.lessonNumber} 节 · 约 {lesson.standardTime} 分钟
                      </span>
                    </div>
                    <h2 className="heading-serif text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                      {unitTitle}
                    </h2>
                  </div>
                </div>

                <h1 className="heading-serif text-heading-1 md:text-display-2 text-ink dark:text-paper-100">
                  {lesson.title}
                </h1>

                {/* One-line goal */}
                <div className="mt-6 p-4 border-l-4 border-prussian dark:border-gold bg-prussian-50/50 dark:bg-prussian-900/20 rounded-r-card shadow-sm">
                  <p className="font-medium text-body-lg text-ink dark:text-paper-100">
                    🎯 {lesson.oneLineGoal}
                  </p>
                </div>

                {/* Time estimates */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-card bg-paper-200/50 dark:bg-ink-light/50">
                    <div className="text-heading-4 font-serif font-bold text-ink dark:text-paper-100">
                      {lesson.readingTime}′
                    </div>
                    <div className="text-small text-ink-muted dark:text-paper-400">
                      阅读
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-card bg-paper-200/50 dark:bg-ink-light/50">
                    <div className="text-heading-4 font-serif font-bold text-ink dark:text-paper-100">
                      {lesson.listeningTime}′
                    </div>
                    <div className="text-small text-ink-muted dark:text-paper-400">
                      聆听
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-card bg-paper-200/50 dark:bg-ink-light/50">
                    <div className="text-heading-4 font-serif font-bold text-ink dark:text-paper-100">
                      {lesson.exerciseTime}′
                    </div>
                    <div className="text-small text-ink-muted dark:text-paper-400">
                      练习
                    </div>
                  </div>
                </div>

                {/* Prerequisites */}
                {lesson.prerequisites.length > 0 && (
                  <div className="mt-6">
                    <h2 className="font-medium text-sm text-ink-muted dark:text-paper-400 mb-2">
                      前置知识
                    </h2>
                    <ul className="space-y-1">
                      {lesson.prerequisites.map((prereq, i) => (
                        <li
                          key={i}
                          className="text-sm text-ink dark:text-paper-200 flex items-start gap-2"
                        >
                          <span className="text-sage mt-1">✓</span>
                          {prereq}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Prerequisite terms explained */}
                {lesson.prerequisiteTerms.length > 0 && (
                  <div className="mt-4 p-4 rounded-card bg-paper-200/50 dark:bg-ink-light/50">
                    <h3 className="text-sm font-medium text-ink dark:text-paper-200 mb-2">
                      本课会用到的概念
                    </h3>
                    {lesson.prerequisiteTerms.map((term) => (
                      <div key={term.termId} className="mt-2">
                        <span className="font-medium text-prussian dark:text-gold-light">
                          {term.termId}
                        </span>
                        <span className="text-sm text-ink-muted dark:text-paper-400 ml-2">
                          {term.briefExplanation}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Success criteria */}
                <div className="mt-6 p-4 rounded-card border border-sage-100 dark:border-sage-dark/30">
                  <h3 className="text-sm font-medium text-sage-dark dark:text-sage-light mb-1">
                    完成标准
                  </h3>
                  <p className="text-sm text-ink dark:text-paper-200">
                    {lesson.successCriteria}
                  </p>
                </div>

                <div className="mt-8">
                  <button onClick={goNext} className="btn-primary">
                    开始学习
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step: Pre-listening */}
            {currentStep === 'pre-listening' && (
              <div className="animate-fade-in">
                <h2 className="heading-serif text-heading-2 text-ink dark:text-paper-100 mb-6">
                  听前准备
                </h2>

                {/* Work identity */}
                <div className="card p-5 mb-6 border border-paper-300 dark:border-ink-light">
                  <h3 className="text-sm font-medium text-ink-muted dark:text-paper-400 mb-2">
                    本课作品
                  </h3>
                  <div className="text-body font-medium text-ink dark:text-paper-100">
                    {/* This would be populated from actual work data */}
                    作品信息将从数据中加载
                  </div>

                  {/* Listen buttons */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="listen-button">
                      <Headphones className="w-4 h-4" />
                      搜索这部作品
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleCopySearch('search query')}
                      className="btn-secondary text-sm"
                    >
                      {copiedSearch ? (
                        <>
                          <Check className="w-4 h-4" />
                          已复制
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          复制曲名
                        </>
                      )}
                    </button>
                  </div>

                  <p className="mt-3 text-small text-ink-subtle dark:text-paper-400">
                    在您选择的音乐平台打开后，请返回这里继续。
                    课程位置和笔记会保留。
                  </p>
                </div>

                {/* Pre-listening tips (≤3) */}
                <h3 className="font-medium text-heading-4 text-ink dark:text-paper-100 mb-3">
                  听前只需知道
                </h3>
                <div className="space-y-3">
                  {lesson.preListeningTips.map((tip, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-card bg-paper-200/50 dark:bg-ink-light/30"
                    >
                      <span className="font-serif font-bold text-prussian dark:text-gold-light text-lg leading-none mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-body text-ink dark:text-paper-200">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>

                <NavigationButtons onPrev={goPrev} onNext={goNext} />
              </div>
            )}

            {/* Step: First Listen */}
            {currentStep === 'first-listen' && (
              <div className="animate-fade-in">
                <h2 className="heading-serif text-heading-2 text-ink dark:text-paper-100 mb-2">
                  第一遍聆听
                </h2>
                <p className="text-sm text-ink-muted dark:text-paper-400 mb-6">
                  只观察一件事，可以先不看背景故事
                </p>

                <div className="p-6 rounded-card border-2 border-prussian/25 dark:border-gold/40 bg-prussian-50/40 dark:bg-prussian-900/20 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-gold mt-1 shrink-0" />
                    <div>
                      <h3 className="font-medium text-body-lg text-ink dark:text-paper-100">
                        这一遍请注意：
                      </h3>
                      <p className="mt-2 text-body text-ink dark:text-paper-200 leading-relaxed">
                        {lesson.firstListening}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-card bg-paper-200/50 dark:bg-ink-light/30">
                  <p className="text-sm text-ink-muted dark:text-paper-400">
                    💡 不用担心听不出来。第一遍的目的是让你的注意力有一个落脚点。
                    如果走神了，随时可以暂停然后继续。
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button className="listen-button">
                    <Headphones className="w-4 h-4" />
                    去听
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-small text-ink-subtle dark:text-paper-400">
                    听完后回来，点击"下一步"
                  </span>
                </div>

                <NavigationButtons onPrev={goPrev} onNext={goNext} nextLabel="听完了，下一步" />
              </div>
            )}

            {/* Step: Second Listen */}
            {currentStep === 'second-listen' && (
              <div className="animate-fade-in">
                <h2 className="heading-serif text-heading-2 text-ink dark:text-paper-100 mb-2">
                  第二遍聆听
                </h2>
                <p className="text-sm text-ink-muted dark:text-paper-400 mb-6">
                  这一遍有更多具体线索
                </p>

                <div className="space-y-3">
                  {lesson.secondListening.cues.map((cue, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-card border border-paper-300 dark:border-ink-light"
                    >
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-sage text-white text-small font-bold shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-body text-ink dark:text-paper-200">
                        {cue}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button className="listen-button">
                    <Headphones className="w-4 h-4" />
                    再听一遍
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

                <NavigationButtons onPrev={goPrev} onNext={goNext} nextLabel="听完了，继续" />
              </div>
            )}

            {/* Step: Explanation */}
            {currentStep === 'explanation' && (
              <div className="animate-fade-in">
                <h2 className="heading-serif text-heading-2 text-ink dark:text-paper-100 mb-6">
                  刚才听见了什么
                </h2>

                <div className="prose dark:prose-dark">
                  <div className="drop-cap-illuminated text-body text-ink dark:text-paper-200 leading-relaxed whitespace-pre-line font-serif text-base">
                    {lesson.explanation}
                  </div>
                </div>

                <NavigationButtons onPrev={goPrev} onNext={goNext} />
              </div>
            )}

            {/* Step: Exercise */}
            {currentStep === 'exercise' && (
              <div className="animate-fade-in">
                <h2 className="heading-serif text-heading-2 text-ink dark:text-paper-100 mb-6">
                  练习
                </h2>

                <div className="space-y-6">
                  {lesson.exercises.map((exercise, i) => (
                    <ExerciseBlock
                      key={exercise.id}
                      exercise={exercise}
                      number={i + 1}
                      answer={exerciseAnswers[exercise.id]}
                      showFeedback={showFeedback[exercise.id]}
                      onAnswer={(answer) => {
                        setExerciseAnswers((prev) => ({
                          ...prev,
                          [exercise.id]: answer,
                        }));
                      }}
                      onShowFeedback={() => {
                        setShowFeedback((prev) => ({
                          ...prev,
                          [exercise.id]: true,
                        }));
                      }}
                      feedback={lesson.feedback}
                    />
                  ))}
                </div>

                <NavigationButtons onPrev={goPrev} onNext={goNext} />
              </div>
            )}

            {/* Step: Transfer */}
            {currentStep === 'transfer' && (
              <div className="animate-fade-in">
                <h2 className="heading-serif text-heading-2 text-ink dark:text-paper-100 mb-6">
                  迁移任务
                </h2>

                <div className="p-6 rounded-card border-2 border-gold/20 bg-gold-50/50 dark:bg-gold-dark/10">
                  <h3 className="font-medium text-body-lg text-ink dark:text-paper-100 mb-3">
                    换一首音乐，试试同样的方法
                  </h3>
                  <p className="text-body text-ink dark:text-paper-200 leading-relaxed">
                    {lesson.transferTask.description}
                  </p>
                  {lesson.transferTask.suggestedWork && (
                    <p className="mt-3 text-sm text-ink-muted dark:text-paper-400">
                      建议作品：{lesson.transferTask.suggestedWork}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-ink-muted dark:text-paper-400">
                    方法：{lesson.transferTask.method}
                  </p>
                </div>

                <NavigationButtons onPrev={goPrev} onNext={goNext} />
              </div>
            )}

            {/* Step: Record */}
            {currentStep === 'record' && (
              <div className="animate-fade-in">
                <h2 className="heading-serif text-heading-2 text-ink dark:text-paper-100 mb-2">
                  一分钟记录
                </h2>
                <p className="text-sm text-ink-muted dark:text-paper-400 mb-6">
                  写下你的观察。没有标准答案，记录是为了下次对比。
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-ink dark:text-paper-200 mb-1.5">
                      {lesson.oneMinuteRecord.promptWhatHeard}
                    </label>
                    <textarea
                      value={whatHeard}
                      onChange={(e) => setWhatHeard(e.target.value)}
                      className="w-full p-3 rounded-card border border-paper-300 dark:border-ink-muted bg-white dark:bg-ink-light text-body text-ink dark:text-paper-200 resize-y min-h-[80px]"
                      placeholder="例如：我注意到开头的旋律在中间部分又出现了，但这次伴奏变了……"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink dark:text-paper-200 mb-1.5">
                      {lesson.oneMinuteRecord.promptUncertain}
                    </label>
                    <textarea
                      value={uncertain}
                      onChange={(e) => setUncertain(e.target.value)}
                      className="w-full p-3 rounded-card border border-paper-300 dark:border-ink-muted bg-white dark:bg-ink-light text-body text-ink dark:text-paper-200 resize-y min-h-[60px]"
                      placeholder="例如：不确定中间那段换了调还是只是换了乐器……"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink dark:text-paper-200 mb-1.5">
                      {lesson.oneMinuteRecord.promptNextFocus}
                    </label>
                    <textarea
                      value={nextFocus}
                      onChange={(e) => setNextFocus(e.target.value)}
                      className="w-full p-3 rounded-card border border-paper-300 dark:border-ink-muted bg-white dark:bg-ink-light text-body text-ink dark:text-paper-200 resize-y min-h-[60px]"
                      placeholder="例如：下次想特别注意低音部分的变化……"
                    />
                  </div>
                </div>

                <div className="mt-4 text-small text-ink-subtle dark:text-paper-400">
                  记录保存在当前浏览器中。
                </div>

                <NavigationButtons onPrev={goPrev} onNext={goNext} />
              </div>
            )}

            {/* Step: Review */}
            {currentStep === 'review' && (
              <div className="animate-fade-in">
                <h2 className="heading-serif text-heading-2 text-ink dark:text-paper-100 mb-6">
                  复习与延伸
                </h2>

                <div className="space-y-3">
                  {lesson.reviewLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={link.url ?? link.targetId ?? '#'}
                      className="flex items-center gap-3 p-4 rounded-card border border-paper-300 dark:border-ink-light hover:border-gold/50 transition-colors group"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-ink dark:text-paper-100 group-hover:text-prussian dark:group-hover:text-gold-light transition-colors">
                          {link.title}
                        </div>
                        <div className="text-small text-ink-muted dark:text-paper-400 mt-0.5">
                          {link.reason}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-ink-subtle dark:text-paper-400 shrink-0" />
                    </Link>
                  ))}
                </div>

                {/* Completion */}
                <div className="mt-8 p-6 rounded-card border-2 border-sage-100 dark:border-sage-dark/30 bg-sage-50/30 dark:bg-sage-dark/10 text-center">
                  {isCompleted ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-sage mx-auto mb-3" />
                      <h3 className="font-serif font-semibold text-heading-3 text-ink dark:text-paper-100">
                        第 {lesson.globalNumber} 节完成
                      </h3>
                      <p className="mt-2 text-sm text-ink-muted dark:text-paper-400">
                        你已经标记完成了这节课
                      </p>
                      <button
                        onClick={handleUndoComplete}
                        className="mt-3 text-sm text-ink-subtle dark:text-paper-400 hover:text-prussian dark:hover:text-gold-light flex items-center gap-1 mx-auto"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        撤销完成
                      </button>
                    </>
                  ) : (
                    <>
                      <h3 className="font-serif font-semibold text-heading-3 text-ink dark:text-paper-100">
                        完成这节课了吗？
                      </h3>
                      <p className="mt-2 text-sm text-ink-muted dark:text-paper-400">
                        {lesson.successCriteria}
                      </p>
                      <button
                        onClick={handleComplete}
                        className="btn-primary mt-4"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        标记为已完成
                      </button>
                    </>
                  )}
                </div>

                {/* Next lesson */}
                {nextLesson && (
                  <div className="mt-6">
                    <Link
                      href={`/courses/unit-${String(lesson.unitNumber).padStart(2, '0')}/${nextLesson.id}/`}
                      className="flex items-center justify-between p-4 rounded-card border border-paper-300 dark:border-ink-light hover:border-gold/50 transition-colors group"
                    >
                      <div>
                        <div className="text-small text-ink-subtle dark:text-paper-400">
                          下一节
                        </div>
                        <div className="font-medium text-ink dark:text-paper-100 group-hover:text-prussian dark:group-hover:text-gold-light transition-colors">
                          {nextLesson.title}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-ink-subtle dark:text-paper-400" />
                    </Link>
                  </div>
                )}
              </div>
            )}
          </article>

          {/* Sidebar — desktop only */}
          <aside className="sidebar" aria-label="课程侧栏">
            <div className="space-y-6">
              {/* Work identity card */}
              <div className="p-4 rounded-card border border-paper-300 dark:border-ink-light">
                <h3 className="text-sm font-medium text-ink-muted dark:text-paper-400 mb-2">
                  本课作品
                </h3>
                <div className="text-sm text-ink dark:text-paper-200">
                  作品信息
                </div>
                <button className="listen-button mt-3 w-full justify-center text-sm">
                  <Headphones className="w-4 h-4" />
                  搜索
                </button>
              </div>

              {/* Current step */}
              <div className="p-4 rounded-card border border-paper-300 dark:border-ink-light">
                <h3 className="text-sm font-medium text-ink-muted dark:text-paper-400 mb-3">
                  学习步骤
                </h3>
                <div className="space-y-1">
                  {stepOrder.map((step, idx) => (
                    <button
                      key={step}
                      onClick={() => goToStep(step)}
                      className={`w-full text-left px-2 py-1.5 rounded text-small transition-colors ${
                        step === currentStep
                          ? 'bg-prussian/10 text-prussian dark:text-gold-light font-bold'
                          : idx < currentStepIndex
                          ? 'text-sage'
                          : 'text-ink-subtle dark:text-paper-400 hover:text-ink dark:hover:text-paper-200'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {idx < currentStepIndex ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : step === currentStep ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-prussian dark:bg-gold" />
                        ) : (
                          <Circle className="w-3.5 h-3.5" />
                        )}
                        {stepLabels[step]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal reminder */}
              <div className="p-4 rounded-card bg-prussian-50/60 dark:bg-prussian-900/30 border border-prussian/15 dark:border-gold/20">
                <h3 className="text-sm font-medium text-prussian dark:text-gold-light mb-1">
                  本课目标
                </h3>
                <p className="text-small text-ink-muted dark:text-paper-400">
                  {lesson.oneLineGoal}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// --- Sub-components ---

function NavigationButtons({
  onPrev,
  onNext,
  nextLabel = '下一步',
}: {
  onPrev: () => void;
  onNext: () => void;
  nextLabel?: string;
}) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <button onClick={onPrev} className="btn-ghost">
        <ChevronLeft className="w-4 h-4" />
        上一步
      </button>
      <button onClick={onNext} className="btn-primary">
        {nextLabel}
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function ExerciseBlock({
  exercise,
  number,
  answer,
  showFeedback,
  onAnswer,
  onShowFeedback,
  feedback,
}: {
  exercise: Exercise;
  number: number;
  answer?: string;
  showFeedback?: boolean;
  onAnswer: (answer: string) => void;
  onShowFeedback: () => void;
  feedback: { correct: string; incorrect: string; notHeard: string; relistenSuggestion: string };
}) {
  return (
    <div className="exercise-block">
      <div className="flex items-center gap-2 mb-3">
        <span className="tag">
          {exercise.type === 'objective' ? '辨识题' : '开放观察'}
        </span>
        <span className="text-small text-ink-subtle dark:text-paper-400">
          第 {number} 题
        </span>
      </div>

      <p className="text-body font-medium text-ink dark:text-paper-100 mb-4">
        {exercise.question}
      </p>

      {exercise.type === 'objective' && exercise.options ? (
        <div className="space-y-2">
          {exercise.options.map((option) => (
            <button
              key={option}
              onClick={() => onAnswer(option)}
              className={`w-full text-left p-3 rounded-card border transition-colors ${
                answer === option
                  ? 'border-prussian dark:border-gold bg-prussian-50/60 dark:bg-prussian-900/30'
                  : 'border-paper-300 dark:border-ink-muted hover:border-gold/50'
              }`}
            >
              <span className="text-sm text-ink dark:text-paper-200">
                {option}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <textarea
          value={answer ?? ''}
          onChange={(e) => onAnswer(e.target.value)}
          className="w-full p-3 rounded-card border border-paper-300 dark:border-ink-muted bg-white dark:bg-ink-light text-body text-ink dark:text-paper-200 resize-y min-h-[80px]"
          placeholder="写下你的观察…"
        />
      )}

      {answer && !showFeedback && (
        <button onClick={onShowFeedback} className="btn-secondary mt-3 text-sm">
          查看反馈
        </button>
      )}

      {showFeedback && (
        <div className="mt-3 p-3 rounded-card bg-paper-200/50 dark:bg-ink-light/50 animate-fade-in">
          <p className="text-sm text-ink dark:text-paper-200">
            {exercise.type === 'objective' && answer === exercise.correctAnswer
              ? feedback.correct
              : exercise.type === 'objective'
              ? feedback.incorrect
              : exercise.explanation}
          </p>
          <p className="mt-2 text-small text-ink-muted dark:text-paper-400">
            {feedback.relistenSuggestion}
          </p>
          <button className="text-small text-prussian dark:text-gold-light font-bold mt-2 flex items-center gap-1 hover:underline">
            <RotateCcw className="w-3 h-3" />
            没听出来？试试重新听这段
          </button>
        </div>
      )}
    </div>
  );
}
