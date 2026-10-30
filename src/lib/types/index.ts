// ============================================================
// 《听见古典》 — 核心类型定义
// Hear the Classics — Core Type Definitions
// ============================================================

// --- 基础类型 ---

/** 时代 / Era */
export type EraId =
  | 'medieval'
  | 'renaissance'
  | 'baroque'
  | 'classical'
  | 'early-romantic'
  | 'romantic'
  | 'late-romantic'
  | 'impressionism'
  | 'twentieth-century'
  | '20th-century'
  | 'contemporary'
  | 'chinese-symphonic';

export interface Era {
  id: EraId;
  name: string;           // 中文名
  nameEn: string;         // English name
  yearStart: number;      // 约始年
  yearEnd: number | null;  // 约终年，当代为 null
  description: string;
  color: string;          // 时间轴配色
  overlapNote?: string;   // 与其他时期重叠说明
}

/** 难度 */
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

/** 核验状态 */
export type VerificationStatus = 'verified' | 'unverified' | 'pending' | 'failed';

/** 内容状态 */
export type ContentStatus = 'draft' | 'edited' | 'fact-checked' | 'source-verified' | 'published';

// --- 作曲家 / Composer ---

export interface Composer {
  id: string;
  name: string;            // 中文通用名
  nameOriginal: string;    // 原文名
  aliases: string[];       // 别名、异译
  birthYear: number | null;
  deathYear?: number | null;
  birthPlace?: string;
  nationality?: string;
  era: EraId[];
  portrait?: ImageSource;
  summary: string;         // 一句话介绍
  soundCharacteristics: string;  // 声音特点
  creativeEnvironment: string;   // 创作环境
  entryWorks: string[];    // 入门作品 ID (3首)
  advancedWorks: string[]; // 进阶作品 ID (3首)
  entryReason: string;     // 选取理由
  connections: ComposerConnection[];
  reliableSources: Source[];
  relatedArticles: string[];  // 关联文章 ID
  status: ContentStatus;
}

export interface ComposerConnection {
  composerId: string;
  relationship: string;    // 与前后辈的联系
}

// --- 作品 / Work ---

export interface Work {
  id: string;
  title: string;            // 中文标题
  titleOriginal: string;    // 原文标题
  nickname?: string;        // 昵称（如"命运"）
  nicknameNote?: string;    // 昵称说明
  composerId: string;
  opusNumber?: string;      // 作品编号 (Op., BWV, K. 等)
  catalogSystem?: string;   // 编号体系名称
  genre: string;            // 体裁
  instrumentation: string;  // 编制
  compositionYear?: number | null;
  compositionYearRange?: [number, number]; // 不确定年份
  premiereYear?: number | null;
  premiereInfo?: string;
  era: EraId;
  movements: Movement[];
  totalDurationRange: [number, number]; // 分钟范围
  difficulty: Difficulty;
  difficultyReason: string;
  
  // 导听内容
  whyListenNow: string;           // 为什么在这个阶段听
  prerequisiteKnowledge: string;   // 听前需要知道什么
  listeningTaskFirst: string;      // 第一遍任务
  listeningTaskSecond: string;     // 第二遍任务
  listeningTaskDeep?: string;      // 深入听任务
  auralEvents: AuralEvent[];       // 至少三个听觉事件
  structureDiagram?: StructureDiagram;
  historicalContext: string;
  commonMisconceptions?: string;
  factVsInterpretation?: string;
  
  // 分类
  isDeepGuide: boolean;     // 是否深入导听 (60部)
  guideWordCount: number;   // 正文字数
  
  // 关联
  defaultRecordingId: string;
  alternateRecordingIds: string[];
  relatedCourseIds: string[];
  relatedConceptIds: string[];
  relatedComposerId: string;
  relatedWorkIds: string[];
  nextWorkId?: string;
  nextWorkReason?: string;
  
  // 深入导听额外内容
  deepGuide?: DeepGuideContent;
  
  sources: Source[];
  status: ContentStatus;
}

export interface Movement {
  id: string;
  number: number;
  title: string;
  titleOriginal?: string;
  tempo?: string;
  durationRange: [number, number]; // 分钟范围
  keySignature?: string;
}

export interface AuralEvent {
  description: string;        // 中文描述
  movementId?: string;
  timeAnchor: TimeAnchor;
  whatToNotice: string;       // 注意什么
}

export interface TimeAnchor {
  type: 'event' | 'timestamp';
  eventDescription?: string;  // 事件锚点："开头独奏结束后"
  timestamp?: string;          // 仅当核验后才有
  recordingId?: string;        // 时间戳绑定的录音
  movementId?: string;
  startReference: 'track-start' | 'video-start';
  verificationStatus: VerificationStatus;
}

export interface StructureDiagram {
  type: 'simplified' | 'detailed';
  label: string;               // "教学简化" 或 "详细分析"
  sections: StructureSection[];
  textAlternative: string;     // 文字替代
}

export interface StructureSection {
  name: string;
  startAnchor?: TimeAnchor;
  description: string;
  color?: string;              // 不能只靠颜色
}

export interface DeepGuideContent {
  materialReturns: string;     // 主要材料的返回与变化
  movementRelationships: string; // 不同乐章之间的关系
  specificComparisons: string;
  furtherReading: Source[];
  sessionSuggestion: string;   // 分几次完成的建议
}

// --- 录音 / Recording ---

export interface Recording {
  id: string;
  workId: string;
  movementIds?: string[];      // 关联的乐章
  performers: Performer[];
  conductor?: string;
  ensemble?: string;
  recordingYear?: number | null;
  releaseYear?: number | null;
  label?: string;              // 唱片公司
  albumTitle?: string;
  isHistorical: boolean;
  isHIP: boolean;              // 历史知情演奏
  platformLinks: PlatformLink[];
  searchStrings: SearchString[];
  verificationStatus: VerificationStatus;
  verificationDate?: string;
  notes?: string;
}

export interface Performer {
  name: string;
  nameOriginal?: string;
  role: string;                // 钢琴、小提琴、女高音等
}

export interface PlatformLink {
  platform: MusicPlatform;
  url: string;
  type: 'direct' | 'search' | 'album' | 'playlist';
  regionRestriction?: string[];
  requiresSubscription: boolean;
  requiresLogin: boolean;
  verificationStatus: VerificationStatus;
  verificationDate?: string;
  canPlay: boolean | null;     // null = 未验证
  metadataMatch: boolean | null;
}

export type MusicPlatform =
  | 'apple-music'
  | 'apple-music-classical'
  | 'spotify'
  | 'idagio'
  | 'digital-concert-hall'
  | 'naxos'
  | 'qq-music'
  | 'netease-music'
  | 'bilibili'
  | 'youtube'
  | 'free'
  | 'other';

export interface SearchString {
  platform: MusicPlatform;
  query: string;
  language: 'zh' | 'en' | 'original';
}

// --- 课程 / Lesson ---

export interface CourseUnit {
  id: string;
  number: number;             // 1-12
  title: string;
  description: string;
  lessons: Lesson[];
  reviewContent?: string;     // 回顾与应用
}

export interface Lesson {
  id: string;
  unitId: string;
  unitNumber: number;
  lessonNumber: number;       // 1-12 within unit
  globalNumber: number;       // 1-144 overall
  title: string;
  
  // 强制模板 12项
  oneLineGoal: string;                    // 1. 一句话目标
  prerequisites: string[];                // 2. 前置知识
  prerequisiteTerms: TermExplanation[];   // 需要先解释的术语
  
  workIdentity: LessonWorkReference;      // 3. 作品身份与录音
  
  preListeningTips: string[];             // 4. 听前提示 (≤3)
  firstListening: string;                 // 5. 第一遍：只观察一件事
  secondListening: SecondListeningGuide;  // 6. 第二遍：3-6个线索
  explanation: string;                    // 7. 先用中文解释，再引术语
  
  exercises: Exercise[];                  // 8. 1-3道练习
  feedback: ExerciseFeedback;             // 9. 正确/错误/没听出来反馈
  transferTask: TransferTask;             // 10. 迁移任务
  oneMinuteRecord: OneMinuteRecord;       // 11. 一分钟记录模板
  reviewLinks: ReviewLink[];              // 12. 复习与延伸
  
  // 时间估计
  minimumTime: number;        // 5分钟最低任务
  standardTime: number;       // 15-25分钟常规
  deepTime?: number;          // 深入任务时间
  readingTime: number;
  listeningTime: number;
  exerciseTime: number;
  
  // 成功标准
  successCriteria: string;    // 可观察的标准
  
  sources: Source[];
  status: ContentStatus;
  wordCount: number;
}

export interface LessonWorkReference {
  workId: string;
  movementIds?: string[];      // 建议听的乐章
  recordingId: string;         // 主录音
  alternateRecordingIds: string[];
  freeAlternativeId?: string;  // 免费替代
}

export interface SecondListeningGuide {
  cues: string[];             // 3-6个具体听觉线索
}

export interface TermExplanation {
  termId: string;
  briefExplanation: string;
}

// --- 练习 / Exercise ---

export interface Exercise {
  id: string;
  lessonId?: string;
  type: 'objective' | 'observation';  // 客观辨识 / 开放观察
  question: string;
  options?: string[];          // 选择题选项
  correctAnswer?: string;      // 客观题答案
  explanation: string;
  relistenAnchor?: TimeAnchor; // 可重听位置
  difficulty: Difficulty;
}

export interface ExerciseFeedback {
  correct: string;
  incorrect: string;
  notHeard: string;            // "没听出来"的反馈
  relistenSuggestion: string;
}

export interface TransferTask {
  description: string;
  suggestedWork?: string;      // 建议换听的作品
  method: string;              // 同一方法的说明
}

export interface OneMinuteRecord {
  promptWhatHeard: string;
  promptUncertain: string;
  promptNextFocus: string;
}

export interface ReviewLink {
  type: 'course' | 'work' | 'concept' | 'composer' | 'external';
  targetId?: string;
  title: string;
  url?: string;
  reason: string;
}

// --- 音乐史专题 / History Article ---

export interface HistoryArticle {
  id: string;
  title: string;
  historicalQuestion: string;   // 明确的历史问题
  era: EraId[];
  yearRange: [number, number];
  content: string;
  relatedWorkIds: string[];     // 2-4部站内作品
  whatToHear: string;           // 这种历史变化可以听见什么
  keywords: string[];
  sources: Source[];
  status: ContentStatus;
  wordCount: number;
}

// --- 乐器与人声 / Instrument ---

export interface InstrumentArticle {
  id: string;
  name: string;
  nameOriginal?: string;
  family: 'string' | 'woodwind' | 'brass' | 'percussion' | 'keyboard' | 'voice' | 'other';
  soundProduction: string;      // 发声原理
  timbreDescription: string;    // 音色描述
  role: string;                 // 在乐队/室内乐中的角色
  confusedWith: ConfusedPair[]; // 易混淆对象
  listeningExamples: InstrumentExample[];
  range?: string;
  orchestraSeatNote?: string;   // 座位说明（说明布局会变化）
  sources: Source[];
  status: ContentStatus;
}

export interface ConfusedPair {
  instrumentId: string;
  howToDistinguish: string;
}

export interface InstrumentExample {
  workId: string;
  movementId?: string;
  anchor: TimeAnchor;
  description: string;
}

// --- 体裁与曲式 / Form & Genre ---

export interface FormGenreArticle {
  id: string;
  title: string;
  type: 'genre' | 'form';      // 区分体裁和结构形式
  definition: string;
  commonMisconception?: string;
  relatedTerms: string[];
  examples: FormExample[];
  diagram?: StructureDiagram;
  diagramTextVersion: string;   // 图解的文字版本
  sources: Source[];
  status: ContentStatus;
  wordCount: number;
}

export interface FormExample {
  workId: string;
  explanation: string;
  anchor?: TimeAnchor;
}

// --- 术语 / Glossary Term ---

export interface GlossaryTerm {
  id: string;
  term: string;                  // 中文术语
  termOriginal?: string;         // 原文
  category: TermCategory;
  definition: string;            // 通俗定义
  commonMisconception?: string;
  example?: string;
  auralAction?: string;          // 听觉验证动作（把词放回声音里）
  relatedTermIds: string[];
  relatedContentIds: string[];   // 出现该术语的课程/文章
  popoverDefinition: string;     // 术语弹层简短版
  status: ContentStatus;
  wordCount: number;
}

export type TermCategory =
  | 'tempo'      // 速度
  | 'dynamics'   // 力度
  | 'articulation' // 奏法
  | 'structure'  // 结构
  | 'genre'      // 体裁
  | 'ensemble'   // 演奏编制
  | 'recording'  // 录音概念
  | 'general';   // 通用

// --- 录音比较 / Recording Comparison ---

export interface RecordingComparison {
  id: string;
  workId: string;
  title: string;
  recordingIds: string[];       // 参与比较的录音
  comparisonPoints: ComparisonPoint[];
  metadata: RecordingComparisonMeta[];
  conclusion?: string;
  verificationStatus: VerificationStatus;
  sources: Source[];
  status: ContentStatus;
}

export interface ComparisonPoint {
  aspect: string;               // 速度、乐句、力度等
  observations: {
    recordingId: string;
    observation: string;
  }[];
}

export interface RecordingComparisonMeta {
  recordingId: string;
  totalDuration?: string;
  duration?: string;
  tempoNotes?: string;
}

// --- 策划路线 / Learning Route ---

export interface LearningRoute {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  totalDurationRange: [number, number]; // 小时范围
  difficulty: Difficulty;
  steps: RouteStep[];
  alternativeSteps?: RouteStep[];  // 替换方案
  reasoning: string;               // 选择理由
  prerequisites?: string;
}

export interface RouteStep {
  order: number;
  type: 'lesson' | 'work' | 'article';
  contentId: string;
  reason: string;
  estimatedMinutes: number;
}

// --- 通用类型 ---

export interface Source {
  id: string;
  title: string;
  author?: string;
  institution?: string;
  url?: string;
  accessDate?: string;
  supportsFacts: string[];      // 支持哪些事实
  license?: string;
}

export interface ImageSource {
  url: string;
  alt: string;
  source: string;
  license: string;
  isGenerated: boolean;         // 是否AI生成
  note?: string;                // 不能冒充真实史料
}

// --- 用户数据 ---

export interface UserPreferences {
  musicPlatform: MusicPlatform | null;
  hasSubscription: boolean | null;
  fontSize: 'small' | 'medium' | 'large';
  colorMode: 'light' | 'dark' | 'system';
  reduceMotion: boolean;
  currentRouteId?: string;
}

export interface UserProgress {
  lessonProgress: Record<string, LessonProgress>;
  workProgress: Record<string, WorkProgress>;
  completedExercises: string[];
  currentLesson?: string;
  lastVisited: string;           // ISO date
  exportDate?: string;
}

export interface LessonProgress {
  lessonId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  completedAt?: string;
  notes?: string;
}

export interface WorkProgress {
  workId: string;
  listened: boolean;
  bookmarked: boolean;
  listenLater: boolean;
  notes?: string;
  lastVisited?: string;
}

export interface ListeningNote {
  id: string;
  contentType: 'lesson' | 'work' | 'free';
  contentId?: string;
  text: string;
  whatHeard?: string;
  uncertain?: string;
  nextFocus?: string;
  createdAt: string;
  updatedAt: string;
}

// --- 搜索 ---

export interface SearchResult {
  type: 'work' | 'recording' | 'lesson' | 'term' | 'composer' | 'article';
  id: string;
  title: string;
  subtitle?: string;
  excerpt?: string;
  url: string;
  score: number;
}

// --- 内容统计 ---

export interface ContentStats {
  lessons: { total: number; byStatus: Record<ContentStatus, number> };
  works: { total: number; deep: number; standard: number; byStatus: Record<ContentStatus, number> };
  composers: { total: number; byStatus: Record<ContentStatus, number> };
  historyArticles: { total: number; byStatus: Record<ContentStatus, number> };
  instrumentArticles: { total: number; byStatus: Record<ContentStatus, number> };
  formGenreArticles: { total: number; byStatus: Record<ContentStatus, number> };
  glossaryTerms: { total: number; byCategory: Record<TermCategory, number>; byStatus: Record<ContentStatus, number> };
  recordingComparisons: { total: number; byStatus: Record<ContentStatus, number> };
  exercises: { total: number; objective: number; observation: number };
  routes: { total: number; byStatus: Record<ContentStatus, number> };
  totalWordCount: number;
}
