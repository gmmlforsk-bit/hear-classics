'use client';

import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<'obsidian' | 'walnut'>('obsidian');

  useEffect(() => {
    const saved = localStorage.getItem('hear-classics-theme');
    if (saved === 'walnut') {
      applyTheme('walnut');
    } else {
      applyTheme('obsidian');
    }
  }, []);

  const applyTheme = (theme: 'obsidian' | 'walnut') => {
    setCurrentTheme(theme);
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.remove('theme-salon');

    if (theme === 'walnut') {
      root.classList.add('theme-walnut');
      localStorage.setItem('hear-classics-theme', 'walnut');
      localStorage.setItem('hc-color-mode', 'dark');
    } else {
      root.classList.remove('theme-walnut');
      localStorage.setItem('hear-classics-theme', 'obsidian');
      localStorage.setItem('hc-color-mode', 'dark');
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#08090C]/95 border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-all">
        {/* Obsidian Charcoal Noir */}
        <button
          onClick={() => applyTheme('obsidian')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            currentTheme === 'obsidian'
              ? 'bg-[#15161C] text-white border border-white/20 shadow-md font-semibold'
              : 'text-zinc-400 hover:text-white'
          }`}
          title="极深黑曜炭素黑灰"
        >
          <span className="w-2 h-2 rounded-full bg-zinc-300" />
          <span>黑曜玄炭</span>
          {currentTheme === 'obsidian' && <Check className="w-3 h-3 text-white" />}
        </button>

        {/* Walnut Deep Dark Noir */}
        <button
          onClick={() => applyTheme('walnut')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            currentTheme === 'walnut'
              ? 'bg-[#1A1512] text-amber-200 border border-amber-500/30 shadow-md font-bold'
              : 'text-zinc-400 hover:text-amber-200'
          }`}
          title="古董胡桃木深炭夜色"
        >
          <span className="w-2 h-2 rounded-full bg-amber-700" />
          <span>胡桃木炭黑</span>
          {currentTheme === 'walnut' && <Check className="w-3 h-3 text-amber-200" />}
        </button>
      </div>
    </div>
  );
}
