import { notFound } from 'next/navigation';
import { allUnits, allLessons } from '@/lib/data';
import { LessonPage } from '@/components/course/LessonPage';

export function generateStaticParams() {
  const params: Array<{ unitId: string; lessonId: string }> = [];

  for (const unit of allUnits) {
    for (const lesson of unit.lessons) {
      params.push({
        unitId: unit.id,
        lessonId: lesson.id,
      });
    }
  }

  return params;
}

export default function GenericLessonRoute({
  params,
}: {
  params: { unitId: string; lessonId: string };
}) {
  const unit = allUnits.find((u) => u.id === params.unitId);
  if (!unit) notFound();

  const lessonIndex = unit.lessons.findIndex((l) => l.id === params.lessonId);
  if (lessonIndex === -1) notFound();

  const lesson = unit.lessons[lessonIndex];
  const prevLesson =
    lessonIndex > 0
      ? {
          id: unit.lessons[lessonIndex - 1].id,
          title: unit.lessons[lessonIndex - 1].title,
        }
      : null;
  const nextLesson =
    lessonIndex < unit.lessons.length - 1
      ? {
          id: unit.lessons[lessonIndex + 1].id,
          title: unit.lessons[lessonIndex + 1].title,
        }
      : null;

  return (
    <LessonPage
      lesson={lesson}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
      unitTitle={unit.title}
    />
  );
}
