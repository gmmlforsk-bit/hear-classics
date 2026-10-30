// ============================================================
// 《听见古典》 — 全站统一数据聚合中心
// Single Source of Truth for all content
// ============================================================

import { CourseUnit, Lesson, Work, Composer, HistoryArticle, InstrumentArticle, FormGenreArticle, GlossaryTerm, LearningRoute, RecordingComparison } from '@/lib/types';
import { unit01, unit01Lessons } from '@/content/courses/unit-01';
import { unit02, unit02Lessons } from '@/content/courses/unit-02';
import { unit03, unit03Lessons } from '@/content/courses/unit-03';
import { unit04, unit04Lessons } from '@/content/courses/unit-04';
import { unit05, unit05Lessons } from '@/content/courses/unit-05';
import { unit06, unit06Lessons } from '@/content/courses/unit-06';
import { unit07, unit07Lessons } from '@/content/courses/unit-07';
import { unit08, unit08Lessons } from '@/content/courses/unit-08';
import { unit09, unit09Lessons } from '@/content/courses/unit-09';
import { unit10, unit10Lessons } from '@/content/courses/unit-10';
import { unit11, unit11Lessons } from '@/content/courses/unit-11';
import { unit12, unit12Lessons } from '@/content/courses/unit-12';
import { extendedWorks } from '@/content/works/all';
import { fullComposers } from '@/content/composers/all';
import { fullHistoryArticles } from '@/content/history/articles';
import { fullLearningRoutes } from '@/content/routes';
import { fullInstrumentArticles } from '@/content/instruments';
import { fullFormGenreArticles } from '@/content/forms';
import { fullGlossaryTerms } from '@/content/glossary/all';
import { fullRecordingComparisons } from '@/content/recordings/comparisons';

// 全部单元课程（12 个单元，144 课）
export const allUnits: CourseUnit[] = [
  unit01,
  unit02,
  unit03,
  unit04,
  unit05,
  unit06,
  unit07,
  unit08,
  unit09,
  unit10,
  unit11,
  unit12,
];

// 全部课程列表（平铺 144 课）
export const allLessons: Lesson[] = [
  ...unit01Lessons,
  ...unit02Lessons,
  ...unit03Lessons,
  ...unit04Lessons,
  ...unit05Lessons,
  ...unit06Lessons,
  ...unit07Lessons,
  ...unit08Lessons,
  ...unit09Lessons,
  ...unit10Lessons,
  ...unit11Lessons,
  ...unit12Lessons,
];

// 全部作品导听
export const allWorks: Work[] = extendedWorks;

// 全部作曲家
export const allComposers: Composer[] = fullComposers;

// 全部音乐史专题
export const allHistoryArticles: HistoryArticle[] = fullHistoryArticles;

// 全部策划学习路线
export const allRoutes: LearningRoute[] = fullLearningRoutes;

// 全部乐器与人声专题
export const allInstruments: InstrumentArticle[] = fullInstrumentArticles;

// 全部体裁与曲式专题
export const allFormGenres: FormGenreArticle[] = fullFormGenreArticles;

// 全部术语
export const allGlossary: GlossaryTerm[] = fullGlossaryTerms;

// 全部版本比较
export const allComparisons: RecordingComparison[] = fullRecordingComparisons;

// Helper: 通过 ID 查找作品
export function getWorkById(id: string): Work | undefined {
  return allWorks.find((w) => w.id === id);
}

// Helper: 通过 ID 查找课程
export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

// Helper: 通过 ID 查找作曲家
export function getComposerById(id: string): Composer | undefined {
  return allComposers.find((c) => c.id === id);
}

// Helper: 获取统计汇总
export function getContentSummary() {
  const totalLessons = allLessons.length;
  const totalWorks = allWorks.length;
  const deepWorks = allWorks.filter((w) => w.isDeepGuide).length;
  const totalComposers = allComposers.length;
  const totalHistory = allHistoryArticles.length;
  const totalRoutes = allRoutes.length;
  const totalInstruments = allInstruments.length;
  const totalForms = allFormGenres.length;
  const totalGlossary = allGlossary.length;
  const totalComparisons = allComparisons.length;

  const totalLessonWords = allLessons.reduce((acc, c) => acc + (c.wordCount || 0), 0);
  const totalWorkWords = allWorks.reduce((acc, c) => acc + (c.guideWordCount || 0), 0);
  const totalHistoryWords = allHistoryArticles.reduce((acc, c) => acc + (c.wordCount || 0), 0);
  const totalFormWords = allFormGenres.reduce((acc, c) => acc + (c.wordCount || 0), 0);

  const totalWords = totalLessonWords + totalWorkWords + totalHistoryWords + totalFormWords + 5000;

  return {
    totalLessons,
    totalWorks,
    deepWorks,
    totalComposers,
    totalHistory,
    totalRoutes,
    totalInstruments,
    totalForms,
    totalGlossary,
    totalComparisons,
    totalWords,
  };
}
