'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Download,
  Upload,
  BookOpen,
  FileText,
  Database,
  CheckCircle2,
  Trash2,
  ExternalLink,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import {
  exportAllData,
  exportNotesAsMarkdown,
  importData,
  checkStorageStatus,
  getAllLessonProgress,
  getAllNotes,
} from '@/lib/storage';
import { LessonProgress, ListeningNote } from '@/lib/types';

export default function MyListeningPage() {
  const [storageInfo, setStorageInfo] = useState<{ available: boolean; message: string }>({
    available: false,
    message: '正在检查本地存储…',
  });
  const [completedCount, setCompletedCount] = useState(0);
  const [notes, setNotes] = useState<ListeningNote[]>([]);
  const [importStatus, setImportStatus] = useState<string>('');

  useEffect(() => {
    async function loadData() {
      const status = await checkStorageStatus();
      setStorageInfo(status);

      const progress = await getAllLessonProgress();
      const completed = Object.values(progress).filter((p) => p.status === 'completed').length;
      setCompletedCount(completed);

      const loadedNotes = await getAllNotes();
      setNotes(loadedNotes);
    }
    loadData();
  }, []);

  const handleExportJSON = async () => {
    const data = await exportAllData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hear-classics-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportMarkdown = async () => {
    const md = await exportNotesAsMarkdown();
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `my-classical-notes-${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const json = JSON.parse(text);
      const res = await importData(json, 'merge');
      if (res.errors.length > 0) {
        setImportStatus(`导入完成，但有错误：${res.errors.join('; ')}`);
      } else {
        setImportStatus(`成功导入 ${res.imported} 条记录，跳过 ${res.skipped} 条重复项。`);
      }
      // reload
      const progress = await getAllLessonProgress();
      setCompletedCount(Object.values(progress).filter((p) => p.status === 'completed').length);
      setNotes(await getAllNotes());
    } catch (err) {
      setImportStatus('导入失败：文件解析错误，请确保上传有效导出的 JSON 文件。');
    }
  };

  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="content-area max-w-reading">
        {/* Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="tag font-bold">
              本地优先档案库
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              零隐私泄露安全架构
            </span>
          </div>
          <h1 className="heading-serif font-bold text-3xl sm:text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight">
            我的聆听记录
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300 font-serif text-sm sm:text-base leading-relaxed">
            纯粹本地优先设计。所有完成状态与笔记均安全储存在当前浏览器中，无账号强迫、无追踪分析、无隐私上传。
          </p>
        </div>

        {/* Storage Health Pill */}
        <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-[#121316] mb-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-zinc-400 shrink-0" />
            <div>
              <span className="text-sm font-sans font-bold text-zinc-900 dark:text-white block">
                本地存储引擎（IndexedDB 沙箱）
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                {storageInfo.message}
              </span>
            </div>
          </div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            安全运行中
          </span>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="card-museum p-5 border border-zinc-200 dark:border-white/[0.08]">
            <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">已完成课时</span>
            <div className="font-serif font-bold text-3xl text-zinc-900 dark:text-white">
              {completedCount} <span className="text-xs font-mono text-zinc-400 font-normal">/ 144 节</span>
            </div>
          </div>
          <div className="card-museum p-5 border border-zinc-200 dark:border-white/[0.08]">
            <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">沉淀听觉手记</span>
            <div className="font-serif font-bold text-3xl text-zinc-900 dark:text-white">
              {notes.length} <span className="text-xs font-mono text-zinc-400 font-normal">篇记录</span>
            </div>
          </div>
        </div>

        {/* Data Backup & Migration */}
        <div className="card-museum p-6 mb-8 space-y-4 border border-zinc-200 dark:border-white/[0.08]">
          <h2 className="heading-serif font-bold text-xl text-zinc-900 dark:text-white">
            数据备份与导出
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-serif leading-relaxed">
            当更换电脑或清理浏览器缓存前，强烈建议导出备份文件（完全属于你的个人私密资产）：
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleExportJSON}
              className="px-4 py-2.5 rounded-xl font-sans text-xs font-semibold bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 border border-transparent flex items-center gap-2 transition-all shadow-sm"
            >
              <Download className="w-4 h-4 text-zinc-400" />
              导出完整备份 (JSON)
            </button>
            <button
              onClick={handleExportMarkdown}
              className="px-4 py-2.5 rounded-xl font-sans text-xs font-semibold bg-zinc-100 dark:bg-white/[0.06] text-zinc-900 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-white/[0.12] border border-zinc-200 dark:border-white/[0.1] flex items-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              导出笔记文稿 (Markdown)
            </button>
            <label className="px-4 py-2.5 rounded-xl font-sans text-xs font-semibold bg-zinc-100 dark:bg-white/[0.06] text-zinc-900 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-white/[0.12] border border-zinc-200 dark:border-white/[0.1] flex items-center gap-2 cursor-pointer transition-all">
              <Upload className="w-4 h-4 text-zinc-400" />
              导入备份数据
              <input
                type="file"
                accept=".json"
                onChange={handleFileImport}
                className="hidden"
              />
            </label>
          </div>

          {importStatus && (
            <p className="text-xs text-zinc-800 dark:text-zinc-200 mt-2 p-3 rounded-xl bg-zinc-100 dark:bg-white/[0.04] font-mono border border-zinc-200 dark:border-white/10">
              {importStatus}
            </p>
          )}
        </div>

        {/* My Notes Showcase */}
        <div>
          <h2 className="heading-serif font-bold text-xl text-zinc-900 dark:text-white mb-4">
            近期聆听手记
          </h2>
          {notes.length === 0 ? (
            <div className="p-8 text-center rounded-2xl border border-dashed border-zinc-300 dark:border-white/10 text-zinc-400 font-serif text-sm">
              暂无已保存笔记。在完成课程或在第一课随堂记录时写下的观察会安全呈现在这里。
            </div>
          ) : (
            <div className="space-y-4">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="card-museum p-5 space-y-2 border border-zinc-200 dark:border-white/[0.08]"
                >
                  <span className="text-[11px] text-zinc-400 font-mono block">
                    {new Date(note.createdAt).toLocaleDateString('zh-CN')}
                  </span>
                  {note.text && (
                    <p className="text-sm text-zinc-800 dark:text-zinc-100 font-serif leading-relaxed">
                      {note.text}
                    </p>
                  )}
                  {note.whatHeard && (
                    <p className="text-sm text-zinc-800 dark:text-zinc-200 font-serif">
                      <strong className="text-zinc-900 dark:text-white">听见变化：</strong> {note.whatHeard}
                    </p>
                  )}
                  {note.uncertain && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-serif">
                      <strong>不确定处：</strong> {note.uncertain}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
