import Link from 'next/link';
import { allRoutes } from '@/lib/data';
import { Compass, Clock, ChevronRight, Sparkles } from 'lucide-react';

const routeArtworks = [
  '/images/curator/pathway-symphonic.jpg',
  '/images/curator/pathway-sensory.jpg',
  '/images/curator/pathway-modern.jpg',
  '/images/daily/bach-organ.jpg',
  '/images/daily/beethoven-orchestra.jpg',
  '/images/knowledge/composers.jpg',
  '/images/knowledge/forms.jpg',
  '/images/daily/mahler-mountain.jpg',
  '/images/daily/contemporary-acoustic.jpg',
];

export default function RoutesIndexPage() {
  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="content-area">
        {/* Title */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="tag font-bold">按时按需阶梯指引</span>
            <span className="tag font-bold">18 条专业策划路线</span>
          </div>
          <h1 className="heading-serif text-heading-1 md:text-display-2 text-zinc-900 dark:text-zinc-50">
            策划路线：沿着专业轨迹启程
          </h1>
          <p className="mt-3 text-body text-zinc-600 dark:text-zinc-300 font-serif leading-relaxed">
            按你的时间预算、硬件设备与兴趣偏好展开。每一条路线均标明总时长范围、难度等级与清晰的入选理由，杜绝盲目漫游。
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allRoutes.map((route, idx) => {
            const artwork = routeArtworks[idx % routeArtworks.length];
            return (
              <div
                key={route.id}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-white/[0.08] hover:border-zinc-400 dark:hover:border-white/30 transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between min-h-[380px] p-6 text-white"
              >
                {/* Background Artwork */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${artwork}')` }}
                />

                {/* Dark Vignette Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/85 to-[#09090B]/50" />

                {/* Top Header */}
                <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/15">
                  <span className="font-mono text-xs font-bold text-zinc-200">
                    FOLIO N° {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-black/60 backdrop-blur-md text-zinc-200 border border-white/15">
                      {route.difficulty === 'beginner'
                        ? '入门基石'
                        : route.difficulty === 'intermediate'
                        ? '进阶深化'
                        : '学术探索'}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-300 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      约 {route.totalDurationRange[0]}–{route.totalDurationRange[1]}h
                    </span>
                  </div>
                </div>

                {/* Middle Content */}
                <div className="relative z-10 space-y-3 pt-12">
                  <h2 className="heading-serif font-bold text-xl text-white group-hover:text-zinc-200 transition-colors">
                    {route.title}
                  </h2>
                  <p className="text-xs text-zinc-300 leading-relaxed font-serif line-clamp-3">
                    {route.description}
                  </p>

                  <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-xs text-zinc-200 font-serif">
                    <span className="font-bold text-zinc-300 block mb-1">适合人群：</span>
                    {route.targetAudience}
                  </div>
                </div>

                {/* Bottom Footer */}
                <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-zinc-300 font-serif">
                  <span className="text-[11px] text-zinc-400 font-mono">
                    路线规划
                  </span>
                  <Link
                    href="/courses/unit-01/lesson-01/"
                    className="group-hover:text-white flex items-center gap-1 font-medium transition-colors font-sans text-xs"
                  >
                    开始路线导学
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
