'use client';

import Link from 'next/link';
import { ChevronRight, Clock } from 'lucide-react';
import { HeroSection } from '@/components/home/HeroSection';
import { TodayListening } from '@/components/home/TodayListening';
import { CourseOverview } from '@/components/home/CourseOverview';
import { EraStrip } from '@/components/home/EraStrip';
import { FeaturedWorks } from '@/components/home/FeaturedWorks';
import { StatsBar } from '@/components/home/StatsBar';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* SECTION 1: Monumental Hero Cover & Vinyl Turntable */}
      <HeroSection />

      {/* SECTION 2: Tonight's Concert Program Note */}
      <div className="relative">
        <div className="content-area pt-8 pb-2 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1.5 font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider">
            <span>+</span> 01 / TONIGHT AT THE CONCERT HALL · 今晚聆听
          </span>
          <span className="hidden sm:inline text-xs text-zinc-400">
            聚焦单部作品核心声音动作
          </span>
        </div>
        <TodayListening />
      </div>

      {/* SECTION 3: Knowledge Base Census Ledger */}
      <div className="relative">
        <div className="content-area pt-4 pb-2 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1.5 font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider">
            <span>+</span> 02 / THE ARCHIVAL CENSUS · 知识库规模与合规
          </span>
          <span className="hidden sm:inline text-xs text-zinc-400">
            700,920 字真实原创结构化内容
          </span>
        </div>
        <StatsBar />
      </div>

      {/* SECTION 4: The 12-Unit Curriculum Map with Historical Artworks */}
      <div className="relative border-t border-white/[0.08]">
        <div className="content-area pt-8 pb-2 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 font-bold text-zinc-200 uppercase tracking-wider">
            <span>+</span> 03 / SYSTEMATIC CURRICULUM · 144 讲系统课
          </span>
          <span className="hidden sm:inline text-xs text-zinc-400">
            从初听感知到独立研究
          </span>
        </div>
        <CourseOverview />
      </div>

      {/* SECTION 5: Historical Continuum Gallery */}
      <div className="relative border-t border-white/[0.08]">
        <div className="content-area pt-8 pb-2 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 font-bold text-zinc-200 uppercase tracking-wider">
            <span>+</span> 04 / HISTORICAL CONTINUUM · 时代历史声音长卷
          </span>
          <span className="hidden sm:inline text-xs text-zinc-400">
            中世纪至当代中国交响
          </span>
        </div>
        <EraStrip />
      </div>

      {/* SECTION 6: Canonical Works Showcase */}
      <div className="relative border-t border-white/[0.08]">
        <div className="content-area pt-8 pb-2 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 font-bold text-zinc-200 uppercase tracking-wider">
            <span>+</span> 05 / CANONICAL WORKS · 300+ 部实证导听
          </span>
          <span className="hidden sm:inline text-xs text-zinc-400">
            含 60 部深度解构专著
          </span>
        </div>
        <FeaturedWorks />
      </div>

      {/* SECTION 7: Curated Learning Routes */}
      <section className="border-t border-white/[0.08] py-16 md:py-24">
        <div className="content-area">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold tracking-widest text-zinc-200 uppercase">
                <span>+</span> 06 / CURATED ITINERARIES · 策划路线
              </div>
              <h2 className="heading-serif text-heading-1 md:text-display-2 text-white">
                不知道从哪开始？沿着策划路线走
              </h2>
              <p className="mt-2 text-body text-zinc-400 max-w-xl font-serif leading-relaxed">
                每条路线都经过音乐学严格论证，带你避开繁琐冗长的弯路，按时间与偏好精准抵达经典内核。
              </p>
            </div>
            <Link
              href="/courses/routes/"
              className="btn-secondary text-xs flex items-center gap-1.5 shrink-0"
            >
              浏览全部 18 条路线
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RouteArchivalCard
              folio="N° 01"
              badge="零门槛最佳起点"
              title="首次七次聆听"
              description="七次精心安排的听觉探险，从单线条琶音到交响乐高潮，帮你建立第一批扎实的辨析经验。"
              duration="约 2–3 小时"
              workCount="7 部核心作品"
              artworkUrl="/images/curator/pathway-symphonic.jpg"
              href="/courses/routes/"
              palette={{
                cardBg: 'bg-[#090A0E]',
                border: 'border-white/[0.08] hover:border-amber-400/40',
                gradient: 'from-[#050608] via-[#050608]/90 to-[#050608]/50',
                badge: 'bg-[#14151C] text-amber-200/90 border-amber-500/30',
                accent: 'text-amber-200/90',
              }}
            />
            <RouteArchivalCard
              folio="N° 02"
              badge="100% 公版合法音源"
              title="没有会员也能学"
              description="24 次免费公版合法音源专属路线，不花一分钱，完全覆盖旋律、节奏、织体与曲式核心技能。"
              duration="约 6–8 小时"
              workCount="24 部免费名作"
              artworkUrl="/images/curator/pathway-sensory.jpg"
              href="/courses/routes/"
              palette={{
                cardBg: 'bg-[#090A0E]',
                border: 'border-white/[0.08] hover:border-amber-400/40',
                gradient: 'from-[#050608] via-[#050608]/90 to-[#050608]/50',
                badge: 'bg-[#14151C] text-amber-200/90 border-amber-500/30',
                accent: 'text-amber-200/90',
              }}
            />
            <RouteArchivalCard
              folio="N° 03"
              badge="日常微习惯养成"
              title="每天五分钟：听见一件事"
              description="利用晨起或通勤碎片时间。每次只追踪一个具体的声音动作（如只听双簧管交接、只数动机次数）。"
              duration="持续 30 天"
              workCount="30 段经典片段"
              artworkUrl="/images/curator/pathway-modern.jpg"
              href="/courses/routes/"
              palette={{
                cardBg: 'bg-[#090A0E]',
                border: 'border-white/[0.08] hover:border-amber-400/40',
                gradient: 'from-[#050608] via-[#050608]/90 to-[#050608]/50',
                badge: 'bg-[#14151C] text-amber-200/90 border-amber-500/30',
                accent: 'text-amber-200/90',
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function RouteArchivalCard({
  folio,
  badge,
  title,
  description,
  duration,
  workCount,
  artworkUrl,
  href,
  palette,
}: {
  folio: string;
  badge: string;
  title: string;
  description: string;
  duration: string;
  workCount: string;
  artworkUrl: string;
  href: string;
  palette: {
    cardBg: string;
    border: string;
    gradient: string;
    badge: string;
    accent: string;
  };
}) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-2xl ${palette.cardBg} rim-light-bevel transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[300px] p-6 text-white`}
    >
      {/* Background Artwork Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-70 group-hover:opacity-90"
        style={{ backgroundImage: `url('${artworkUrl}')` }}
      />

      {/* Dark Vignette Scrim with Palette Under-Color */}
      <div className={`absolute inset-0 bg-gradient-to-t ${palette.gradient}`} />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <span className={`font-mono text-xs font-bold ${palette.accent}`}>
          {folio}
        </span>
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider backdrop-blur-md border ${palette.badge}`}>
          {badge}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 space-y-2 pt-16">
        <h3 className="heading-serif font-bold text-xl text-white group-hover:text-zinc-100 transition-colors">
          {title}
        </h3>

        <p className="text-xs text-zinc-300 font-serif leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-zinc-300 font-mono">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              {duration}
            </span>
            <span>·</span>
            <span className="text-[11px] text-zinc-400">{workCount}</span>
          </div>
          <span className={`group-hover:text-white flex items-center gap-1 font-medium transition-colors font-sans ${palette.accent}`}>
            启程
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
