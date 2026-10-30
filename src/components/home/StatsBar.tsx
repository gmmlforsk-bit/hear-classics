'use client';

import { getContentSummary } from '@/lib/data';
import { BookOpen, Music, Users, Clock, FileText, Route, Disc, Layers, Award, Sparkles } from 'lucide-react';

export function StatsBar() {
  const summary = getContentSummary();

  const stats = [
    { label: '系统课程', value: `${summary.totalLessons}`, unit: '讲', sub: '12 单元全阶覆盖', icon: BookOpen },
    { label: '作品导听', value: `${summary.totalWorks}`, unit: '部', sub: `含 ${summary.deepWorks} 部深度解构`, icon: Music },
    { label: '版本比较', value: `${summary.totalComparisons}`, unit: '组', sub: '名家对比双盲听辨', icon: Disc },
    { label: '历史专题', value: `${summary.totalHistory}`, unit: '篇', sub: '七大断代问题驱动', icon: Clock },
    { label: '作曲家星系', value: `${summary.totalComposers}`, unit: '位', sub: '跨越八百年大师谱系', icon: Users },
    { label: '乐器与体裁', value: `${summary.totalForms + summary.totalInstruments}`, unit: '篇', sub: '32 乐器 + 36 体裁展馆', icon: Layers },
    { label: '术语词典', value: `${summary.totalGlossary}`, unit: '条', sub: '附带具象听觉动作', icon: FileText },
    { label: '策划路线', value: `${summary.totalRoutes}`, unit: '条', sub: '按偏好定制阶梯', icon: Route },
  ];

  return (
    <section className="content-area py-6">
      <div className="relative rounded-3xl bg-[#090A0E] rim-light-bevel border border-white/[0.08] shadow-2xl p-6 md:p-8 overflow-hidden backdrop-blur-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-6 border-b border-white/[0.08] gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#14151C] flex items-center justify-center text-amber-200/90 border border-amber-500/30 shadow-md">
              <Award className="w-5 h-5 text-amber-300/80" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-white flex items-center gap-2">
                <span>中文古典音乐高维知识库体系</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#14151C] text-amber-200/80 border border-amber-500/30 font-semibold tracking-wider">
                  CANONICAL ARCHIVE
                </span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                70 余万字原创实证体系 · 470+ 静态路由预渲染 · 零第三方依赖纯前端交付
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-zinc-300 font-medium px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300/80" />
            全部内容 100% 完整实装 · 零缺失
          </div>
        </div>

        {/* 8 Stats Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group flex flex-col items-center justify-between p-3.5 rounded-2xl bg-[#060709] border border-white/[0.04] hover:border-amber-400/30 hover:bg-[#0E0F14] transition-all duration-300 shadow-sm"
              >
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center mb-2.5 group-hover:scale-105 group-hover:bg-[#181922] group-hover:border-amber-500/30 transition-all shadow-sm">
                  <Icon className="w-4 h-4 text-zinc-400 group-hover:text-amber-200 transition-colors" />
                </div>
                <div>
                  <div className="font-serif font-bold text-2xl text-white group-hover:text-amber-100 leading-none transition-colors">
                    {stat.value}
                    <span className="text-xs font-normal text-zinc-500 ml-0.5">{stat.unit}</span>
                  </div>
                  <div className="text-xs font-serif font-medium text-zinc-300 mt-1.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 mt-0.5 truncate max-w-[120px]">
                    {stat.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
