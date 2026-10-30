import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 殿堂艺术纸昼色 (Fine Gallery Alabaster & Silken Parchment - 高雅纯净，绝无死黄)
        paper: {
          50: '#FFFFFF',
          100: '#FAF9F6',   // 顶级艺术展厅哑光雪白
          200: '#F3EFEA',   // 暖象牙极淡纸绢
          300: '#E8E2D8',   // 极细精密分界线
          400: '#D5CDC0',
          500: '#9C9384',
        },
        // 施坦威钢琴漆黑与深邃声学空间 (Steinway Ebony & Caviar Noir)
        ink: {
          DEFAULT: '#12141D', // 丝绒深邃黑
          light: '#181B26',   // 暗色悬浮卡片面
          muted: '#61687A',   // 正文次级灰
          subtle: '#8C93A6',  // 辅助元数据
          deep: '#090A0F',   // 极致殿堂极夜深空
        },
        // 维也纳金色大厅 / 歌剧院丝绒波尔多红 (Imperial Bordeaux & Opera Velvet)
        bordeaux: {
          DEFAULT: '#9F1239', // 经典歌剧院深红丝绒
          light: '#E11D48',   // 鲜活玫瑰红晶
          dark: '#881337',    // 皇室暗红
          deep: '#4C0519',    // 奢华浓缩红酒底
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
        },
        // 珍珠香槟色与丝绢光泽 (Champagne Pearl Silk - 高端珠宝级，纯净优雅，绝非死泥黄)
        champagne: {
          DEFAULT: '#E8DFD1', // 珍珠香槟白
          light: '#F5EFEB',   // 象牙雪绢
          dark: '#C4B59D',    // 铂金微光
          deep: '#8C7B60',
          50: '#FAF8F5',
        },
        // 皇家深邃青金石与萨尔茨堡夜空 (Royal Lapis & Midnight Sapphire)
        lapis: {
          DEFAULT: '#1E3A8A', // 皇家普鲁士青金蓝
          light: '#3B82F6',   // 晴空微光
          dark: '#172554',
          50: '#EFF6FF',
          100: '#DBEAFE',
        },
        // 乐团常青藤绿 (Orchestral Emerald)
        emerald: {
          DEFAULT: '#065F46',
          light: '#10B981',
          dark: '#047857',
        },
        // 兼容原 azure 语义，映射到皇家萨尔茨堡蓝
        azure: {
          DEFAULT: '#1D4ED8',
          light: '#60A5FA',
          dark: '#1E40AF',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
        },
        // 兼容原 wine 语义，映射到帝王波尔多红
        wine: {
          DEFAULT: '#9F1239',
          light: '#E11D48',
          dark: '#881337',
          deep: '#4C0519',
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
        },
        // 兼容原 gold 语义：映射到高雅珍珠香槟 / 玫瑰铂金光泽，彻底告别死黄
        gold: {
          DEFAULT: '#D4C7B4',
          light: '#F3EDE2',
          dark: '#9F8D73',
          50: '#FAF8F5',
          100: '#F5EFEB',
          200: '#E8DFD1',
        },
        prussian: {
          DEFAULT: '#1E293B',
          light: '#334155',
          dark: '#0F172A',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        pine: {
          DEFAULT: '#065F46',
          light: '#10B981',
          dark: '#047857',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
        },
        sapphire: {
          DEFAULT: '#1E3A8A',
          light: '#3B82F6',
          dark: '#172554',
        },
        cosmic: {
          DEFAULT: '#4C1D95',
          light: '#8B5CF6',
          dark: '#2E1065',
          50: '#F5F3FF',
          100: '#EDE9FE',
        },
        aurora: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
      },
      fontFamily: {
        serif: [
          'Songti SC',
          'Source Han Serif SC',
          'Noto Serif CJK SC',
          'Noto Serif SC',
          'SimSun',
          'STSong',
          'Cinzel',
          'Playfair Display',
          'Didot',
          'Georgia',
          'Cambria',
          'serif',
        ],
        sans: [
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'Source Han Sans SC',
          'Noto Sans CJK SC',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'SF Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      maxWidth: {
        reading: '680px',
        content: '1280px',
      },
      fontSize: {
        micro: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        caption: ['0.8125rem', { lineHeight: '1.25rem' }],
        body: ['0.9375rem', { lineHeight: '1.625rem' }],
        'heading-3': ['1.125rem', { lineHeight: '1.5rem' }],
        'heading-2': ['1.375rem', { lineHeight: '1.75rem' }],
        'heading-1': ['1.75rem', { lineHeight: '2.125rem' }],
        'display-2': ['2.25rem', { lineHeight: '2.5rem' }],
        'display-1': ['3rem', { lineHeight: '1.1' }],
      },
      borderRadius: {
        card: '1.25rem',
        button: '9999px',
        tag: '9999px',
      },
      boxShadow: {
        card: '0 8px 30px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.12)',
        'card-dark': '0 10px 40px rgba(0, 0, 0, 0.5)',
        'bordeaux-glow': '0 4px 25px rgba(159, 18, 57, 0.35)',
        'champagne-glow': '0 0 30px rgba(232, 223, 209, 0.25)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
