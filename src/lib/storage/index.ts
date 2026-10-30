// ============================================================
// 《听见古典》 — IndexedDB Storage Layer
// 本地存储：用户学习记录、笔记、偏好设置
// ============================================================
'use client';

import type {
  UserPreferences,
  UserProgress,
  LessonProgress,
  WorkProgress,
  ListeningNote,
  MusicPlatform,
} from '@/lib/types';

const DB_NAME = 'hear-classics';
const DB_VERSION = 1;

const STORES = {
  preferences: 'preferences',
  progress: 'progress',
  notes: 'notes',
  recentlyViewed: 'recentlyViewed',
} as const;

// --- Database Setup ---

let dbPromise: Promise<IDBDatabase> | null = null;

function getDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB 在当前浏览器中不可用。您的学习记录将无法保存。'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(new Error('无法打开本地数据库。请检查浏览器隐私设置。'));
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      if (!db.objectStoreNames.contains(STORES.preferences)) {
        db.createObjectStore(STORES.preferences);
      }

      if (!db.objectStoreNames.contains(STORES.progress)) {
        const progressStore = db.createObjectStore(STORES.progress, {
          keyPath: 'id',
        });
        progressStore.createIndex('type', 'type');
        progressStore.createIndex('updatedAt', 'updatedAt');
      }

      if (!db.objectStoreNames.contains(STORES.notes)) {
        const notesStore = db.createObjectStore(STORES.notes, {
          keyPath: 'id',
        });
        notesStore.createIndex('contentId', 'contentId');
        notesStore.createIndex('createdAt', 'createdAt');
      }

      if (!db.objectStoreNames.contains(STORES.recentlyViewed)) {
        const recentStore = db.createObjectStore(STORES.recentlyViewed, {
          keyPath: 'id',
        });
        recentStore.createIndex('viewedAt', 'viewedAt');
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };
  });

  return dbPromise;
}

// --- Preferences ---

const DEFAULT_PREFERENCES: UserPreferences = {
  musicPlatform: null,
  hasSubscription: null,
  fontSize: 'medium',
  colorMode: 'system',
  reduceMotion: false,
};

export async function getPreferences(): Promise<UserPreferences> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORES.preferences, 'readonly');
      const store = tx.objectStore(STORES.preferences);
      const request = store.get('user-preferences');
      request.onsuccess = () => {
        resolve(request.result ?? DEFAULT_PREFERENCES);
      };
      request.onerror = () => resolve(DEFAULT_PREFERENCES);
    });
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

export async function savePreferences(
  prefs: Partial<UserPreferences>
): Promise<void> {
  const current = await getPreferences();
  const updated = { ...current, ...prefs };
  const db = await getDB();
  const tx = db.transaction(STORES.preferences, 'readwrite');
  tx.objectStore(STORES.preferences).put(updated, 'user-preferences');
}

// --- Lesson Progress ---

export async function getLessonProgress(
  lessonId: string
): Promise<LessonProgress | null> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORES.progress, 'readonly');
      const request = tx.objectStore(STORES.progress).get(`lesson:${lessonId}`);
      request.onsuccess = () => resolve(request.result ?? null);
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function saveLessonProgress(
  lessonId: string,
  status: 'not-started' | 'in-progress' | 'completed',
  notes?: string
): Promise<void> {
  const db = await getDB();
  const tx = db.transaction(STORES.progress, 'readwrite');
  const store = tx.objectStore(STORES.progress);

  const existing = await new Promise<LessonProgress | null>((resolve) => {
    const req = store.get(`lesson:${lessonId}`);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
  });

  const record = {
    id: `lesson:${lessonId}`,
    type: 'lesson',
    lessonId,
    status,
    notes: notes ?? existing?.notes,
    completedAt:
      status === 'completed'
        ? new Date().toISOString()
        : existing?.completedAt,
    updatedAt: new Date().toISOString(),
  };

  store.put(record);
}

export async function undoLessonCompletion(lessonId: string): Promise<void> {
  await saveLessonProgress(lessonId, 'in-progress');
}

export async function getAllLessonProgress(): Promise<
  Record<string, LessonProgress>
> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORES.progress, 'readonly');
      const index = tx.objectStore(STORES.progress).index('type');
      const request = index.getAll('lesson');
      request.onsuccess = () => {
        const result: Record<string, LessonProgress> = {};
        for (const item of request.result) {
          result[item.lessonId] = item;
        }
        resolve(result);
      };
      request.onerror = () => resolve({});
    });
  } catch {
    return {};
  }
}

// --- Work Progress ---

export async function getWorkProgress(
  workId: string
): Promise<WorkProgress | null> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORES.progress, 'readonly');
      const request = tx.objectStore(STORES.progress).get(`work:${workId}`);
      request.onsuccess = () => resolve(request.result ?? null);
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function saveWorkProgress(
  workId: string,
  update: Partial<WorkProgress>
): Promise<void> {
  const db = await getDB();
  const tx = db.transaction(STORES.progress, 'readwrite');
  const store = tx.objectStore(STORES.progress);

  const existing = await new Promise<WorkProgress | null>((resolve) => {
    const req = store.get(`work:${workId}`);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
  });

  const record = {
    id: `work:${workId}`,
    type: 'work',
    workId,
    listened: false,
    bookmarked: false,
    listenLater: false,
    ...existing,
    ...update,
    lastVisited: new Date().toISOString(),
  };

  store.put(record);
}

// --- Notes ---

export async function saveNote(note: ListeningNote): Promise<void> {
  const db = await getDB();
  const tx = db.transaction(STORES.notes, 'readwrite');
  tx.objectStore(STORES.notes).put({
    ...note,
    updatedAt: new Date().toISOString(),
  });
}

export async function getNote(noteId: string): Promise<ListeningNote | null> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORES.notes, 'readonly');
      const request = tx.objectStore(STORES.notes).get(noteId);
      request.onsuccess = () => resolve(request.result ?? null);
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function getNotesByContent(
  contentId: string
): Promise<ListeningNote[]> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORES.notes, 'readonly');
      const index = tx.objectStore(STORES.notes).index('contentId');
      const request = index.getAll(contentId);
      request.onsuccess = () => resolve(request.result ?? []);
      request.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

export async function getAllNotes(): Promise<ListeningNote[]> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORES.notes, 'readonly');
      const request = tx.objectStore(STORES.notes).getAll();
      request.onsuccess = () => resolve(request.result ?? []);
      request.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

export async function deleteNote(noteId: string): Promise<void> {
  const db = await getDB();
  const tx = db.transaction(STORES.notes, 'readwrite');
  tx.objectStore(STORES.notes).delete(noteId);
}

// --- Recently Viewed ---

export async function addRecentlyViewed(
  id: string,
  type: string,
  title: string
): Promise<void> {
  const db = await getDB();
  const tx = db.transaction(STORES.recentlyViewed, 'readwrite');
  tx.objectStore(STORES.recentlyViewed).put({
    id,
    type,
    title,
    viewedAt: new Date().toISOString(),
  });
}

export async function getRecentlyViewed(
  limit = 20
): Promise<Array<{ id: string; type: string; title: string; viewedAt: string }>> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORES.recentlyViewed, 'readonly');
      const index = tx.objectStore(STORES.recentlyViewed).index('viewedAt');
      const request = index.openCursor(null, 'prev');
      const results: Array<{ id: string; type: string; title: string; viewedAt: string }> = [];

      request.onsuccess = () => {
        const cursor = request.result;
        if (cursor && results.length < limit) {
          results.push(cursor.value);
          cursor.continue();
        } else {
          resolve(results);
        }
      };
      request.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

// --- Export & Import ---

export interface ExportData {
  version: 1;
  exportDate: string;
  preferences: UserPreferences;
  lessonProgress: Record<string, LessonProgress>;
  notes: ListeningNote[];
}

export async function exportAllData(): Promise<ExportData> {
  const preferences = await getPreferences();
  const lessonProgress = await getAllLessonProgress();
  const notes = await getAllNotes();

  return {
    version: 1,
    exportDate: new Date().toISOString(),
    preferences,
    lessonProgress,
    notes,
  };
}

export async function importData(
  data: unknown,
  mode: 'merge' | 'replace' = 'merge'
): Promise<{ imported: number; skipped: number; errors: string[] }> {
  const errors: string[] = [];
  let imported = 0;
  let skipped = 0;

  // Validate format
  if (!data || typeof data !== 'object') {
    return { imported: 0, skipped: 0, errors: ['导入文件格式不正确'] };
  }

  const importData = data as ExportData;

  if (importData.version !== 1) {
    return {
      imported: 0,
      skipped: 0,
      errors: [`不支持的数据版本: ${importData.version}`],
    };
  }

  // Import preferences
  if (importData.preferences) {
    try {
      if (mode === 'replace') {
        await savePreferences(importData.preferences);
      } else {
        const current = await getPreferences();
        // Only import platform preference if not already set
        if (!current.musicPlatform && importData.preferences.musicPlatform) {
          await savePreferences({
            musicPlatform: importData.preferences.musicPlatform,
          });
        }
      }
      imported++;
    } catch (e) {
      errors.push('偏好设置导入失败');
    }
  }

  // Import lesson progress
  if (importData.lessonProgress) {
    for (const [lessonId, progress] of Object.entries(
      importData.lessonProgress
    )) {
      try {
        if (mode === 'replace') {
          await saveLessonProgress(
            lessonId,
            progress.status,
            progress.notes
          );
          imported++;
        } else {
          const existing = await getLessonProgress(lessonId);
          if (!existing || existing.status === 'not-started') {
            await saveLessonProgress(
              lessonId,
              progress.status,
              progress.notes
            );
            imported++;
          } else {
            skipped++;
          }
        }
      } catch {
        errors.push(`课程进度 ${lessonId} 导入失败`);
      }
    }
  }

  // Import notes
  if (importData.notes) {
    for (const note of importData.notes) {
      try {
        if (mode === 'replace') {
          await saveNote(note);
          imported++;
        } else {
          const existing = await getNote(note.id);
          if (!existing) {
            await saveNote(note);
            imported++;
          } else {
            skipped++;
          }
        }
      } catch {
        errors.push(`笔记 ${note.id} 导入失败`);
      }
    }
  }

  return { imported, skipped, errors };
}

export async function exportNotesAsMarkdown(): Promise<string> {
  const notes = await getAllNotes();
  let md = '# 我的聆听笔记\n\n';
  md += `导出日期：${new Date().toLocaleDateString('zh-CN')}\n\n---\n\n`;

  for (const note of notes.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )) {
    md += `## ${new Date(note.createdAt).toLocaleDateString('zh-CN')}\n\n`;
    if (note.text) md += `${note.text}\n\n`;
    if (note.whatHeard) md += `**听见了什么：** ${note.whatHeard}\n\n`;
    if (note.uncertain) md += `**不确定的地方：** ${note.uncertain}\n\n`;
    if (note.nextFocus) md += `**下次注意：** ${note.nextFocus}\n\n`;
    md += '---\n\n';
  }

  return md;
}

// --- Storage Status ---

export async function checkStorageStatus(): Promise<{
  available: boolean;
  estimatedUsage?: number;
  quota?: number;
  message: string;
}> {
  if (typeof indexedDB === 'undefined') {
    return {
      available: false,
      message: '当前浏览器不支持 IndexedDB。学习记录无法保存。',
    };
  }

  try {
    await getDB();

    if ('storage' in navigator && 'estimate' in navigator.storage) {
      const estimate = await navigator.storage.estimate();
      return {
        available: true,
        estimatedUsage: estimate.usage,
        quota: estimate.quota,
        message: '本地存储正常。数据保存在当前浏览器中。',
      };
    }

    return {
      available: true,
      message: '本地存储正常。数据保存在当前浏览器中。',
    };
  } catch (e) {
    return {
      available: false,
      message: `本地存储不可用：${e instanceof Error ? e.message : '未知错误'}`,
    };
  }
}
