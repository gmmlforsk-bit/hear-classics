import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeSwitcher } from '@/components/layout/ThemeSwitcher';

export const metadata: Metadata = {
  title: '听见古典 — 从听见变化开始',
  description:
    '面向零基础听众的古典音乐学习知识库。144节递进课程，300部作品导听，从第一次认真聆听开始，逐步建立丰富的听觉经验和历史认识。',
  keywords: [
    '古典音乐',
    '音乐学习',
    '音乐欣赏',
    '作品导听',
    '音乐入门',
    'classical music',
    'music appreciation',
  ],
  openGraph: {
    title: '听见古典 — 从听见变化开始',
    description:
      '面向零基础听众的古典音乐学习知识库。144节递进课程，300部作品导听。',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#09090B" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('hear-classics-theme');
                  var root = document.documentElement;
                  root.classList.add('dark');
                  root.classList.remove('theme-salon');
                  if (mode === 'walnut') {
                    root.classList.add('theme-walnut');
                  } else {
                    root.classList.remove('theme-walnut');
                  }
                  if (localStorage.getItem('hc-reduce-motion') === 'true' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    root.classList.add('reduce-motion');
                  }
                  var fontSize = localStorage.getItem('hc-font-size');
                  if (fontSize) root.setAttribute('data-font-size', fontSize);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
