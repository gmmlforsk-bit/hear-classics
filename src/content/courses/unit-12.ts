import { CourseUnit, Lesson } from '@/lib/types';

export const unit12Lessons: Lesson[] = [
  {
    id: 'lesson-133',
    unitId: 'unit-12',
    unitNumber: 12,
    lessonNumber: 1,
    globalNumber: 133,
    title: '面对陌生作品：第一遍抓什么（抓织体轮廓与能量弧线）',
    oneLineGoal: '面对从未听过的全新作品，不慌张于寻找调性或曲式标签，第一遍优先捕捉织体密度、乐器色彩对比与高潮能量点。',
    prerequisites: ['完成前十一单元132课全部训练'],
    prerequisiteTerms: [
      { termId: '宏观能量弧线 (Energy Curve)', briefExplanation: '整部作品在张力、音量、乐器厚度与速度上的蓄势、爆发与消解轨迹。' },
      { termId: '织体轮廓 (Texture Contour)', briefExplanation: '声音在单声部线条、多声部对位与轰鸣齐奏之间的横向变化格局。' }
    ],
    workIdentity: {
      workId: 'ligeti-atmospheres',
      recordingId: 'rec-atmospheres-abbado',
      alternateRecordingIds: ['rec-atmospheres-rosbaud']
    },
    preListeningTips: [
      '丢掉“这首曲子好不好听、主旋律是什么”的思维定势。',
      '想象自己是一位高空观察员，俯瞰声音云雾的升起、翻滚与消散。'
    ],
    firstListening: '聆听利盖蒂《大气》（Atmosphères）：完全不看乐谱与乐评，仅凭耳朵在白纸上画一条“能量走势折线图”：哪里是静止的微音块？哪里爆发了全乐队的尖锐膨胀？哪里又回归到虚无？',
    secondListening: {
      cues: [
        '00:00-01:30：微复调织体，56件弦乐器同时拉奏不同半音，形成一团悬浮在空中的灰色雾气。',
        '03:40-05:10：木管与铜管群极低音暗流涌动，低音大管与长号构建如地底熔岩般的压迫感。',
        '07:00-08:30：高潮之后乐音彻底滤除，只剩下极弱的摩擦声与空气流动。'
      ]
    },
    explanation: '许多人在听到一部陌生的现代作品或晚期室内乐时会产生强烈的挫败感，因为他们试图用“找副歌”的方式去套所有音乐。面对未知，真正的聆听大师第一遍只做两件事：第一，测算密度——织体是稀疏还是密集？第二，寻找地标——哪里发生了全曲最大的动态转折？只要抓住了这两个锚点，整座声音建筑的骨架就再也不会在你眼前坍塌。',
    exercises: [
      {
        id: 'ex-12-01',
        type: 'objective',
        question: '初次接触一部从未听过的陌生现代派或大型管弦乐作品时，最高效的第一遍聆听策略是？',
        options: [
          '优先感知乐曲的织体密度变化、音色对比与高潮能量弧线',
          '必须立即听出乐曲每一个小节是什么调性并画出奏鸣曲式展开部',
          '因为听不出流行歌曲般琅琅上口的主题，立刻判定它不是好音乐并关掉'
        ],
        correctAnswer: '优先感知乐曲的织体密度变化、音色对比与高潮能量弧线',
        explanation: '第一遍是建立宏观地形图，细节分析留给第二遍。',
        difficulty: 'intermediate'
      }
    ],
    feedback: {
      correct: '极具大局观！你已经掌握了专业聆听者的宏观雷达感知术。',
      incorrect: '',
      notHeard: '',
      relistenSuggestion: ''
    },
    transferTask: {
      description: '挑一首你从未听过的巴托克或梅西安作品，不看任何介绍听完一遍，用三个形容词概括其织体特征并标出最响的爆发时刻。',
      method: '训练直觉化声音感知能力。'
    },
    oneMinuteRecord: {
      promptWhatHeard: '',
      promptUncertain: '',
      promptNextFocus: ''
    },
    reviewLinks: [],
    minimumTime: 6,
    standardTime: 18,
    readingTime: 4,
    listeningTime: 8,
    exerciseTime: 6,
    successCriteria: '能在初次听陌生作品时不产生抗拒心，并能准确画出乐曲的宏观高潮时间段。',
    sources: [],
    status: 'published',
    wordCount: 1210
  },
  {
    id: 'lesson-134',
    unitId: 'unit-12',
    unitNumber: 12,
    lessonNumber: 2,
    globalNumber: 134,
    title: '如何阅读节目册与可信参考资料（过滤修辞，提取配器与曲式硬核）',
    oneLineGoal: '学会过滤音乐会节目册与唱片文案中的文学抒情泡沫，精准提取乐章结构、配器编制、调性布局与历史事实等硬核信息。',
    prerequisites: ['第133课'],
    prerequisiteTerms: [
      { termId: '节目册 (Program Notes)', briefExplanation: '音乐会或唱片内页附带的导听文字，质量参差不齐，需学会辨析去伪存真。' },
      { termId: '硬核音乐学信息', briefExplanation: '创作年代、首演事件、调性、曲式大纲、乐章速度标记与特殊配器。' }
    ],
    workIdentity: {
      workId: 'brahms-symphony-1',
      recordingId: 'rec-sym1-karajan-64',
      alternateRecordingIds: ['rec-sym1-chailly']
    },
    preListeningTips: [
      '凡是看到“犹如命运敲响了死亡的大门”、“如泉水般纯洁洗涤心灵”的文字，直接用红笔划掉！',
      '寻找带冒号、数字、调性符号和乐器名称的具体句子。'
    ],
    firstListening: '阅读一段标准的勃拉姆斯《第一交响曲》节目册。练习“两遍扫视法”：第一遍划掉所有抒情形容词；第二遍摘抄出四个核心数据：c小调（末乐章C大调）、定音鼓顽固低音击打、第四乐章阿尔卑斯圆号牧歌、展开部对第一乐章引子的倒影变形。',
    secondListening: {
      cues: [
        '第一乐章引子：不听所谓“痛苦挣扎”，只听定音鼓在C音上的持续八分音符重击，与小提琴上升线条形成斜向张力。',
        '第四乐章03:30左右：圆号奏出明朗悠扬的高山牧歌，长笛在高音区以同度回应。'
      ]
    },
    explanation: '市面上大量的音乐普及文案充斥着廉价的心灵鸡汤和脑补故事（比如把所有阴郁的旋律都归咎于“作曲家失恋或者没钱交房租”）。作为受过134节系统训练的高阶乐迷，你要学会像侦探一样读文献：抓作品创作年份、乐团特殊规制（如是否有低音大管、三支长号）、乐章调性变迁（c小调到C大调的经典贝多芬式救赎叙事）。事实越清晰，你的聆听就越锐利。',
    exercises: [
      {
        id: 'ex-12-02',
        type: 'objective',
        question: '阅读音乐会节目册时，下列哪类信息对你现场辨识声音结构具有真正的参考价值？',
        options: [
          '“第一乐章定音鼓在主音C上作八分音符持续顽固敲击，上方弦乐与木管呈反向二度进行”',
          '“作曲家在这个乐章里流下了滚烫的男儿热泪，表达了对未婚妻深沉无望的思念”',
          '“这段旋律太优美动听了，宛如天界飘来的七彩祥云”'
        ],
        correctAnswer: '“第一乐章定音鼓在主音C上作八分音符持续顽固敲击，上方弦乐与木管呈反向二度进行”',
        explanation: '只有描述声响材料、配器手法与结构关系的信息才是可验证的听觉依据。',
        difficulty: 'beginner'
      }
    ],
    feedback: {
      correct: '慧眼如炬！绝不被修辞泡沫蒙蔽，只认硬核声学结构。',
      incorrect: '',
      notHeard: '',
      relistenSuggestion: ''
    },
    transferTask: {
      description: '找出一张你手头实体CD或流媒体App上的唱片内页，提炼出它的3条声响技术事实与1处无意义文学脑补。',
      method: '文献批判与事实提炼训练。'
    },
    oneMinuteRecord: {
      promptWhatHeard: '',
      promptUncertain: '',
      promptNextFocus: ''
    },
    reviewLinks: [],
    minimumTime: 5,
    standardTime: 16,
    readingTime: 4,
    listeningTime: 6,
    exerciseTime: 6,
    successCriteria: '能熟练从两千字乐评中在60秒内提取出调性、结构形式与核心配器要点。',
    sources: [],
    status: 'published',
    wordCount: 1230
  },
  {
    id: 'lesson-135',
    unitId: 'unit-12',
    unitNumber: 12,
    lessonNumber: 3,
    globalNumber: 135,
    title: '策划你的“20分钟微型聆听”（单乐章+室内乐+当代作的高效闭环）',
    oneLineGoal: '掌握在碎片化日常中设计一套有起承转合的20分钟专注聆听闭环，保持终身听觉敏锐度。',
    prerequisites: ['第134课'],
    prerequisiteTerms: [
      { termId: '微型聆听单 (Micro-Listening Playlist)', briefExplanation: '由2至3首不同时期、不同织体短乐章组成的紧凑听觉训练单元。' }
    ],
    workIdentity: {
      workId: 'micro-listening-suite-1',
      recordingId: 'rec-micro-suite-curated',
      alternateRecordingIds: []
    },
    preListeningTips: [
      '没有时间听整部四乐章交响曲绝不是放弃古典音乐的借口。',
      '用高密度的20分钟替代漫无目的的2小时背景背景音放水。'
    ],
    firstListening: '体验标准20分钟模块黄金配方：【唤醒】巴赫《E大调小提琴前奏曲》（BWV 1006，4分钟，复调线条清空思绪） -> 【聚焦】韦伯恩《管弦乐小品五首》（Op. 10，5分钟，极致精微音色辨识） -> 【沉淀】舒伯特《死神与少女》弦乐四重奏慢乐章变奏曲（11分钟，深层复调织体沉浸）。',
    secondListening: {
      cues: [
        '第1曲：单声部线条在琴弦间的急速穿梭，唤醒耳蜗高频神经。',
        '第2曲：每件乐器只吐出一两个音符（点描派音色旋律），考验极弱音捕捉力。',
        '第3曲：四重奏温润的中频共鸣，抚平一整天的工作疲惫。'
      ]
    },
    explanation: '许多人古典音乐半途而废，是因为被动辄一个半小时的马勒交响曲或三小时歌剧压垮了。真正的听觉修行在平时的“肌肉记忆”。通过设计三段式20分钟闭环——“清醒剂-显微镜-压舱石”，你可以在午休或下班后的任何碎块时间，完成一次高质量的心灵与听觉重置。',
    exercises: [
      {
        id: 'ex-12-03',
        type: 'objective',
        question: '设计一套高效的20分钟微型聆听单时，最科学的曲目搭配原则是？',
        options: [
          '兼顾不同织体与时代，形成“单线条复调唤醒 -> 现代音色聚焦 -> 室内乐/慢板沉淀”的心理节奏',
          '连续放四首风格完全相同的极慢柔板，直到在沙发上彻底睡着',
          '只随机快进听交响乐高潮的最后二十秒轰鸣'
        ],
        correctAnswer: '兼顾不同织体与时代，形成“单线条复调唤醒 -> 现代音色聚焦 -> 室内乐/慢板沉淀”的心理节奏',
        explanation: '多维度刺激耳蜗与心智，既不疲劳又保持高度专注。',
        difficulty: 'beginner'
      }
    ],
    feedback: {
      correct: '精妙的结构策划！这正是大师级乐迷每日保持耳朵敏锐的秘密武器。',
      incorrect: '',
      notHeard: '',
      relistenSuggestion: ''
    },
    transferTask: {
      description: '用你收藏夹中的单乐章作品，亲自为自己定制一份明晚执行的“20分钟微型聆听单”并保存为播放列表。',
      method: '建立个人日程化聆听习惯。'
    },
    oneMinuteRecord: {
      promptWhatHeard: '',
      promptUncertain: '',
      promptNextFocus: ''
    },
    reviewLinks: [],
    minimumTime: 6,
    standardTime: 20,
    readingTime: 4,
    listeningTime: 12,
    exerciseTime: 4,
    successCriteria: '能独立排出一份时长在18-22分钟、包含至少两个不同时期织体对比的私人微型聆听单。',
    sources: [],
    status: 'published',
    wordCount: 1190
  },
  {
    id: 'lesson-136',
    unitId: 'unit-12',
    unitNumber: 12,
    lessonNumber: 4,
    globalNumber: 136,
    title: '策划一条完整的“音乐会式路线”（序曲+协奏曲+中场+交响曲）',
    oneLineGoal: '掌握古典交响音乐会的经典编排力学，理解各曲目在能量张弛、乐器编制与听众心理上的相互承接，独立策划一场虚拟音乐会。',
    prerequisites: ['第135课'],
    prerequisiteTerms: [
      { termId: '音乐会程序力学 (Concert Programming)', briefExplanation: '开场唤醒（序曲） -> 独奏炫技与合作（协奏曲） -> 幕间休息 -> 压轴重量级结构（大交响曲）的百年剧场平衡法则。' }
    ],
    workIdentity: {
      workId: 'mendelssohn-hebrides-overture',
      recordingId: 'rec-hebrides-gardiner',
      alternateRecordingIds: ['rec-hebrides-karajan']
    },
    preListeningTips: [
      '思考为什么没有指挥家会把大交响曲放在开场、把8分钟轻巧序曲放在最后压轴。',
      '观察不同乐章与作品之间调性与乐器编制的递进关系。'
    ],
    firstListening: '聆听一场精心编排的经典音乐会上半场开场：门德尔松《赫布里底群岛序曲》（Op. 26）。体会海浪翻涌的自然画面感如何迅速让全场一千名刚下班赶来的观众从城市喧嚣进入音乐专注状态。',
    secondListening: {
      cues: [
        '00:00-01:15：大提琴与中提琴在低音区荡漾出海浪动机，木管海鸥般掠过。',
        '07:30-09:00：全乐队爆发，仿佛狂风骤雨击打玄武岩洞穴，随后迅速收拢为极弱，为接下来出场的协奏曲独奏家留出充足的心理期待空间。'
      ]
    },
    explanation: '百年交响乐演出的曲目单编排是一门高超的心理工程学。开场序曲（8-12分钟）负责“破冰热身与调频”；协奏曲（25-35分钟）引入独奏巨星，展现人琴对话与炫技张力，将剧场热度推向第一波高潮；20分钟幕间休息让大脑放空；下半场压轴交响曲（40-60分钟）则全面调动乐队全部编制与复杂曲式，完成一次深邃的精神远征。掌握这一力学，你就能在家里为自己编排最动人的声音盛宴。',
    exercises: [
      {
        id: 'ex-12-04',
        type: 'objective',
        question: '在策划一场标准的交响乐团音乐会时，下列哪种编排顺序最符合受众注意力与能量递进力学？',
        options: [
          '上半场：管弦乐序曲（10分钟）+ 小提琴协奏曲（30分钟） -> 中场休息 -> 下半场：大型四乐章交响曲（45分钟）',
          '上半场：长达80分钟的马勒交响曲 -> 中场休息 -> 下半场：2分钟的短小轻音乐返场曲',
          '只连续演奏三首不同作曲家的大提琴协奏曲，不安排任何管弦乐曲'
        ],
        correctAnswer: '上半场：管弦乐序曲（10分钟）+ 小提琴协奏曲（30分钟） -> 中场休息 -> 下半场：大型四乐章交响曲（45分钟）',
        explanation: '经典序曲-协奏曲-交响曲结构历经两百年检验，兼具热身、炫技与宏大压轴的完美心理张力。',
        difficulty: 'beginner'
      }
    ],
    feedback: {
      correct: '专业级剧场艺术总监的思维格局！',
      incorrect: '',
      notHeard: '',
      relistenSuggestion: ''
    },
    transferTask: {
      description: '为一次假想的周末家庭聆听会策划一份曲目单：选一部序曲、一部协奏曲和一部交响曲，并写出你的编排理由（包括调性或情感走向）。',
      method: '剧场节目策划实践。'
    },
    oneMinuteRecord: {
      promptWhatHeard: '',
      promptUncertain: '',
      promptNextFocus: ''
    },
    reviewLinks: [],
    minimumTime: 6,
    standardTime: 18,
    readingTime: 4,
    listeningTime: 8,
    exerciseTime: 6,
    successCriteria: '能合理解释一场完整音乐会各作品之间的情感衔接与编制呼应逻辑。',
    sources: [],
    status: 'published',
    wordCount: 1220
  },
  {
    id: 'lesson-137',
    unitId: 'unit-12',
    unitNumber: 12,
    lessonNumber: 5,
    globalNumber: 137,
    title: '去现场之前的功课与声学心理准备（现场与录音的声场鸿沟）',
    oneLineGoal: '掌握音乐厅现场聆听的黄金预习流程（熟悉主题轮廓、知晓乐章间不可鼓掌的时机、不同楼层与座席的声学直达声/反射声特性）。',
    prerequisites: ['第136课'],
    prerequisiteTerms: [
      { termId: '直达声 vs 反射声 (Direct vs Reflected Sound)', briefExplanation: '舞台直接传至耳道的声音决定清晰度与定位感；墙面与天花板反弹的反射声决定丰满度与混响包围感。' },
      { termId: '乐章间礼仪 (Movement Etiquette)', briefExplanation: '乐章间是音乐呼吸与情绪延续的留白，不盲目鼓掌是对作曲家宏观结构与演奏家情绪链条的尊重。' }
    ],
    workIdentity: {
      workId: 'mahler-symphony-2',
      recordingId: 'rec-sym2-rattle-bpo',
      alternateRecordingIds: ['rec-sym2-bernstein-ny']
    },
    preListeningTips: [
      '现场不是戴耳机的录音室：现场有空气的呼吸、座椅的轻颤与邻座翻谱的微音。',
      '座位的选择是一门物理学：一楼池座前排看指法但高频刺耳；二楼一层正中（皇帝位）混响平衡最佳；三楼便宜但适合听管风琴与合唱交融。'
    ],
    firstListening: '聆听马勒《第二交响曲“复活”》第五乐章末尾合唱与管风琴爆鸣。想象自己坐在三楼眺望全场：舞台上近百人乐团加上后方两百人合唱团，以及藏在乐池外的远方号角（Fernorchester），声波如何真实击打你的胸腔。',
    secondListening: {
      cues: [
        '死寂中的无伴奏合唱进入：“Aufersteh\'n, ja aufersteh\'n wirst du”（复活，是的，你将复活），极弱声音在现场大厅中的空气微颤。',
        '管风琴超低频脚踏音符沉入地板，整个大厅建筑产生物理共振。'
      ]
    },
    explanation: '为什么我们在家里听过无数次录音，去到现场依然会被震慑得热泪盈眶？因为现场音乐是“空间声学的三维全息物理事件”。去现场之前，做好三项功课：1. 至少听过一遍主曲目的基本旋律，避免现场迷失；2. 查清共有几个乐章，避免在第一乐章热烈结束时突兀鼓掌打断指挥情绪；3. 提前了解场馆声学特性。现场不是去考核演奏家有没有弹错音，而是去参与一场不可复制的人性共振。',
    exercises: [
      {
        id: 'ex-12-05',
        type: 'objective',
        question: '为什么古典音乐会通常建议观众在多乐章作品（如四乐章交响曲）的乐章之间保持安静、不鼓掌？',
        options: [
          '乐章间是整体艺术情绪的呼吸与酝酿阶段，保持安静是对音乐结构完整性与艺术家专注度的尊重',
          '因为乐团乐手在乐章之间会睡着，鼓掌会吵醒他们',
          '因为大厅守则规定鼓掌必须按次数罚款'
        ],
        correctAnswer: '乐章间是整体艺术情绪的呼吸与酝酿阶段，保持安静是对音乐结构完整性与艺术家专注度的尊重',
        explanation: '音乐不仅由声音构成，乐章间的静默与空白同样是整体作品架构的一部分。',
        difficulty: 'beginner'
      }
    ],
    feedback: {
      correct: '真正的文明懂行人！静默往往蕴含着比雷鸣更有力量的艺术张力。',
      incorrect: '',
      notHeard: '',
      relistenSuggestion: ''
    },
    transferTask: {
      description: '查询你所在城市音乐厅近期的交响演出节目单，选一场你感兴趣的音乐会，查看并评估其池座与楼座的声学校准与票价性价比。',
      method: '现场音乐消费与声学规划。'
    },
    oneMinuteRecord: {
      promptWhatHeard: '',
      promptUncertain: '',
      promptNextFocus: ''
    },
    reviewLinks: [],
    minimumTime: 6,
    standardTime: 18,
    readingTime: 4,
    listeningTime: 8,
    exerciseTime: 6,
    successCriteria: '能清楚说明现场声场与立体声耳机的根本差异，并能自信参与现场音乐会全流程礼仪。',
    sources: [],
    status: 'published',
    wordCount: 1240
  },
  {
    id: 'lesson-138',
    unitId: 'unit-12',
    unitNumber: 12,
    lessonNumber: 6,
    globalNumber: 138,
    title: '面对长作品与注意力走神（长时聆听的物理与心理耐力管理）',
    oneLineGoal: '科学管理长时聆听（60-90分钟超大型交响曲与歌剧）的生理与心理注意力曲线，学会“锚点捕捉”与“允许背景化喘息”的张弛之道。',
    prerequisites: ['第137课'],
    prerequisiteTerms: [
      { termId: '注意力耗竭阈值 (Attention Fatigue Threshold)', briefExplanation: '人类深度专注力通常在20-30分钟达到拐点，需要节奏变换以防产生感官钝化。' },
      { termId: '动态锚点法 (Dynamic Anchoring)', briefExplanation: '在长作品中设定里程碑乐句或特殊乐器音色，不强求全程紧绷，有张有弛。' }
    ],
    workIdentity: {
      workId: 'bruckner-symphony-8',
      recordingId: 'rec-sym8-wand-ndr',
      alternateRecordingIds: ['rec-sym8-celibidache']
    },
    preListeningTips: [
      '听长达80分钟的布鲁克纳第八交响曲走神是极度正常的生理现象！不要自责！',
      '把音乐看作一条大江大河：你站在桥上，有时盯着一朵浪花，有时只是感受凉风吹拂。'
    ],
    firstListening: '挑战布鲁克纳《第八交响曲》第三乐章慢板（长达25-30分钟）。尝试“三阶段专注法”：前7分钟紧跟竖琴与弦乐的祈祷主题；中段10分钟允许思维稍微发散、感受宏大的和声织体流动；当听到第三乐章高潮前三件竖琴齐奏与钹的敲击（约22分钟处）时，重新收拢全部注意力。',
    secondListening: {
      cues: [
        '00:00-02:00：降D大调上空灵的弦乐切分音，竖琴如同天国星光滴落。',
        '21:30-23:00：攀登至峰顶的毁灭性大爆发，钹在全曲慢板中唯一一次猛烈敲击，随后归于沉寂。'
      ]
    },
    explanation: '很多人把听古典音乐当成一种“道德苦修”，一旦走神就觉得自己素质不够，这是极其有害的误区。即使最顶级的音乐学院教授和资深乐评人，也不可能在90分钟的交响曲中保持每一秒钟神经高度紧绷。长作品的美学本质是“时间雕塑”，它需要大量的铺垫、循环与回荡。学会像呼吸一样听音乐：在副题与展开部深呼吸，在过渡句允许思绪轻微漂浮，在再现与尾声全神贯注。这种张弛有度，才是享受长作品的终极真谛。',
    exercises: [
      {
        id: 'ex-12-06',
        type: 'objective',
        question: '在聆听布鲁克纳或马勒超过一小时的宏大交响乐作品时，遇到注意力不可避免地走神，最佳的心态与做法是？',
        options: [
          '接纳走神是正常的生理节律，不焦虑自责；依靠之前设定的关键音色或高潮锚点，顺其自然地重新切回核心声部',
          '立刻掐自己大腿强行保持清醒，如果听漏一个小节就把曲子删掉再也不听',
          '关掉音乐去刷短视频'
        ],
        correctAnswer: '接纳走神是正常的生理节律，不焦虑自责；依靠之前设定的关键音色或高潮锚点，顺其自然地重新切回核心声部',
        explanation: '音乐长跑依靠的是科学的张弛节奏与锚点唤醒，而非机械的自我折磨。',
        difficulty: 'beginner'
      }
    ],
    feedback: {
      correct: '豁达从容！你已经找到了与伟大长作品和谐共处的智慧心法。',
      incorrect: '',
      notHeard: '',
      relistenSuggestion: ''
    },
    transferTask: {
      description: '挑一部时长在60分钟以上的交响乐（如贝九、马五或布四），采用张弛锚点法完整听完，并在听音记录本中标记出你重新收拢注意力的两个高光时刻。',
      method: '耐力长跑心理训练。'
    },
    oneMinuteRecord: {
      promptWhatHeard: '',
      promptUncertain: '',
      promptNextFocus: ''
    },
    reviewLinks: [],
    minimumTime: 8,
    standardTime: 25,
    readingTime: 4,
    listeningTime: 15,
    exerciseTime: 6,
    successCriteria: '能平和面对长达一小时以上作品的注意力波动，并利用高潮锚点顺利完成整部大作的聆听。',
    sources: [],
    status: 'published',
    wordCount: 1250
  },
  {
    id: 'lesson-139',
    unitId: 'unit-12',
    unitNumber: 12,
    lessonNumber: 7,
    globalNumber: 139,
    title: '不喜欢一部公认杰作怎么办（诚实认知与审美差异分析）',
    oneLineGoal: '破除“必须跪拜所有大师名作”的心理包袱，用织体、和声偏好与美学范式理性拆解自己“不喜欢”的底层成因，建立诚实而坚定的审美独立性。',
    prerequisites: ['第138课'],
    prerequisiteTerms: [
      { termId: '审美个体差异 (Aesthetic Subjectivity)', briefExplanation: '听觉神经对不同频段的敏感度、文化背景及情绪需求造成的天然个人偏好差异。' },
      { termId: '价值认可与个人喜好解绑 (Recognition vs Affinity)', briefExplanation: '能客观承认一部作品在音乐史上的革命性价值，但同时允许自己在私人情感上对它不感兴趣。' }
    ],
    workIdentity: {
      workId: 'wagner-tristan-prelude',
      recordingId: 'rec-tristan-furtwangler',
      alternateRecordingIds: ['rec-tristan-kleiber']
    },
    preListeningTips: [
      '你完全有权利说：“我理解瓦格纳在和声上的伟大革命，但我就是受不了他那粘稠冗长的半音阶浪潮！”',
      '诚实的批评永远比虚伪的附和高贵一千倍。'
    ],
    firstListening: '聆听瓦格纳《特里斯坦与伊索尔德》前奏曲。客观记录你的生理反应：是感到一种极致销魂的延绵渴望，还是感到一种令人窒息的胸闷与压抑？',
    secondListening: {
      cues: [
        '00:00-01:30：著名特里斯坦和弦的无限延宕。半音向上叹息，但低音始终悬空不解决。',
        '06:00-08:00：浪潮一次又一次被推高，每次以为要进入大三和弦的开阔，却又被拉回半音纠缠的旋涡。'
      ]
    },
    explanation: '古典乐坛最可悲的现象，莫过于许多人为了显示自己的“品位”，假装崇拜所有被写进教科书的作曲家。古典音乐是一个容纳了巴赫的数学严谨、莫扎特的轻盈清澈、贝多芬的铁血抗争、肖邦的诗意脆弱、瓦格纳的权力意志与韦伯恩的冷冽点缀的浩瀚星空。你的听觉大脑必然有其独特的偏好模式。承认自己不喜欢某位大师并不可耻——真正专业的是，你能够清晰地用音乐语言说出“为什么我不喜欢”：是配器太厚？是和声解决太慢？还是结构过于对称？这种带着证据的不喜欢，正是你独立品格的终极证明。',
    exercises: [
      {
        id: 'ex-12-07',
        type: 'objective',
        question: '当面对一部在音乐史上地位极高、但自己在听觉上非常排斥或不喜欢的经典杰作时，成熟乐迷的健康态度是？',
        options: [
          '将“历史价值”与“个人偏好”解绑，诚实接纳自己的感受，并尝试从配器、和声或织体角度分析自己排斥的深层技术原因',
          '为了迎合社交圈子假装自己每天都被它感动得痛哭流涕',
          '在网络上发帖辱骂作曲家是骗子，否定整部音乐史'
        ],
        correctAnswer: '将“历史价值”与“个人偏好”解绑，诚实接纳自己的感受，并尝试从配器、和声或织体角度分析自己排斥的深层技术原因',
        explanation: '审美成熟的核心就是：知其伟大，亦明己所爱；诚实面对，理性论证。',
        difficulty: 'beginner'
      }
    ],
    feedback: {
      correct: '精神自立！你的审美已经拥有了真正成人的骨骼与血肉。',
      incorrect: '',
      notHeard: '',
      relistenSuggestion: ''
    },
    transferTask: {
      description: '列出一首目前你最欣赏不来的古典名曲，写出至少两点具体的技术成因（例如：弦乐中频过于轰鸣、复调线条过密缺乏留白等）。',
      method: '审美反思与理性辩护。'
    },
    oneMinuteRecord: {
      promptWhatHeard: '',
      promptUncertain: '',
      promptNextFocus: ''
    },
    reviewLinks: [],
    minimumTime: 6,
    standardTime: 18,
    readingTime: 4,
    listeningTime: 8,
    exerciseTime: 6,
    successCriteria: '能从容且有理有据地阐述自己对某部经典大作的保留态度，不自卑亦不狂妄。',
    sources: [],
    status: 'published',
    wordCount: 1260
  },
  {
    id: 'lesson-140',
    unitId: 'unit-12',
    unitNumber: 12,
    lessonNumber: 8,
    globalNumber: 140,
    title: '如何从喜欢的冷门作品向外网状拓展（师承、配器与时代网络）',
    oneLineGoal: '掌握“树状与网状探索法”：以一首打动你的冷门作品为原点，顺着作曲家师承、配器传承与同时代友谊网络，发现整片音乐大陆。',
    prerequisites: ['第139课'],
    prerequisiteTerms: [
      { termId: '网状知识图谱探索 (Network Graph Discovery)', briefExplanation: '不按年代死记硬背，而是从个人兴奋点出发，沿师生关系、好友合作、乐派传承向外辐射。' }
    ],
    workIdentity: {
      workId: 'faure-pavane',
      recordingId: 'rec-pavane-du-pre',
      alternateRecordingIds: ['rec-pavane-ozawa']
    },
    preListeningTips: [
      '每一位你热爱的作曲家，都有一位启发过他的老师，和一位继承了他火种的学生。',
      '从单点作品到立体宇宙，只需要拉出三条关系线。'
    ],
    firstListening: '聆听加布里埃尔·弗雷（Gabriel Fauré）极富诗意的《孔雀舞曲》（Pavane，Op. 50）。感受长笛飘逸的法兰西优雅旋律与弦乐轻巧拨奏。',
    secondListening: {
      cues: [
        '00:00-01:00：长笛以细腻的中音区独奏吹出主部主题，低音巴松与大提琴如同威尼斯贡多拉轻摇。',
        '02:30-03:45：合唱与中提琴色彩渐浓，预示着印象派和声的破晓。'
      ]
    },
    explanation: '当你爱上弗雷的《孔雀舞曲》，你该如何拓展你的乐库？顺着他的关系网络拓展：往上看师承——他的老师是圣-桑（Saint-Saëns），去听《动物狂欢节》与《天鹅》；往下看学生——他最骄傲的弟子是莫里斯·拉威尔（Ravel）和娜迪亚·布朗热（Nadia Boulanger），去听拉威尔的《死公主的孔雀舞曲》和《鹅妈妈组曲》；往旁边看同侪好友——去听肖松（Chausson）和杜帕克（Duparc）的艺术歌曲。只靠这一首《孔雀舞曲》，你就能点亮整个19世纪末至20世纪初辉煌灿烂的法国音乐群星图！',
    exercises: [
      {
        id: 'ex-12-08',
        type: 'objective',
        question: '如果你特别喜欢法国作曲家弗雷作品中含蓄精致的织体，顺着哪条拓展路径最可能帮你发现听感相通的宝藏杰作？',
        options: [
          '顺着师生网络，探索弗雷的高足莫里斯·拉威尔（Ravel）的《死公主的孔雀舞曲》与室内乐作品',
          '去随机听一首完全无关的德奥晚期高分贝铜管交响乐',
          '只在播放器里单曲循环这首《孔雀舞曲》一千遍，绝不听任何其他作品'
        ],
        correctAnswer: '顺着师生网络，探索弗雷的高足莫里斯·拉威尔（Ravel）的《死公主的孔雀舞曲》与室内乐作品',
        explanation: '法国师承网络保证了声响美学与配器哲学的高度共鸣。',
        difficulty: 'beginner'
      }
    ],
    feedback: {
      correct: '网络化思维！你已经掌握了乐迷寻宝最敏锐的罗盘。',
      incorrect: '',
      notHeard: '',
      relistenSuggestion: ''
    },
    transferTask: {
      description: '挑一位你最近最喜欢的冷门作曲家，画出他的“师承-学生-同代挚友”三人拓扑图，并各选一部代表作试听。',
      method: '知识图谱拓展实战。'
    },
    oneMinuteRecord: {
      promptWhatHeard: '',
      promptUncertain: '',
      promptNextFocus: ''
    },
    reviewLinks: [],
    minimumTime: 6,
    standardTime: 18,
    readingTime: 4,
    listeningTime: 8,
    exerciseTime: 6,
    successCriteria: '能以任意一首作品为轴心，快速构建出至少串联三位作曲家的网状听音路线。',
    sources: [],
    status: 'published',
    wordCount: 1230
  },
  {
    id: 'lesson-141',
    unitId: 'unit-12',
    unitNumber: 12,
    lessonNumber: 9,
    globalNumber: 141,
    title: '建立个人听音地图与知识库管理（Notion/本地Markdown分类学实操）',
    oneLineGoal: '掌握古典乐迷专属的个人知识库架构法（按作品号BWV/K/Op、版本标签、高潮时间戳与听觉证据构建终身数字档案）。',
    prerequisites: ['第140课'],
    prerequisiteTerms: [
      { termId: '双向链接知识库 (Bidirectional Knowledge Base)', briefExplanation: '在笔记中将作曲家、作品、调性、演奏版本与听觉感受互相交织的第二大脑系统。' },
      { termId: '时间戳证据笔记 (Timestamped Evidence Notes)', briefExplanation: '记录时拒绝空泛，精确写明几分几秒发生了什么声音事件的实证笔记法。' }
    ],
    workIdentity: {
      workId: 'personal-curation-framework',
      recordingId: 'rec-framework-demonstration',
      alternateRecordingIds: []
    },
    preListeningTips: [
      '没有记录的聆听如同水过鸭背，时间一久全成过眼云烟。',
      '不需要长篇大论，一张卡片、三个标签、两条时间戳足矣。'
    ],
    firstListening: '观摩一份标准的黄金乐迷笔记架构：【作品主键】贝多芬《降B大调大赋格》（Op. 133） -> 【版本标签】阿尔班·贝尔格四重奏团1983年版 -> 【关键事件戳】01:45 赋格第一主题不协和切分爆发、05:12 降G大调柔板极弱冥想 -> 【个人评注】粗粝的现代感，完全超越19世纪。',
    secondListening: {
      cues: [
        '核对笔记中的01:45：弦乐四重奏四位大师几乎要把琴弦拉断的愤怒切分音。',
        '核对笔记中的05:12：完全不同的织体，极弱、平缓如星空游弋。'
      ]
    },
    explanation: '流媒体平台给你带来的最大陷阱是“收藏夹堆积如山，但脑海中一片荒芜”。搭建属于自己的本地听音知识库（无论用Markdown、Notion还是纸质卡片），核心是四维定位：作品号（唯一标识）、版本执行者（谁演的）、时间戳（精确证据）、个人心智共振（与哪首曲子产生了互文关联）。当你的知识库积累到上百张卡片时，你就在大脑之外拥有了一个永不褪色、随时可以调取的私人古典宇宙。',
    exercises: [
      {
        id: 'ex-12-09',
        type: 'objective',
        question: '为了让个人听音笔记在五年后依然具有极高的复查与对比价值，下列哪项内容是最不可或缺的灵魂要素？',
        options: [
          '精确的乐章分段与高潮声响事件时间戳（如：04分12秒圆号突强），辅以具体录音版本信息',
          '只抄录网易云或QQ音乐下的热门抒情热评，不记任何曲名与版本',
          '只写“今天听了，感觉不错”六个字'
        ],
        correctAnswer: '精确的乐章分段与高潮声响事件时间戳（如：04分12秒圆号突强），辅以具体录音版本信息',
        explanation: '声学时间戳是连接记忆与声音事实唯一的绝对脐带。',
        difficulty: 'beginner'
      }
    ],
    feedback: {
      correct: '扎实严谨！这是构建终身学习型第二大脑的最高准则。',
      incorrect: '',
      notHeard: '',
      relistenSuggestion: ''
    },
    transferTask: {
      description: '在你的本地笔记软件或本系统“我的听音”模块中，为你最近听的一部作品新建一张带时间戳与版本号的标准听音卡片。',
      method: '数字资产沉淀实战。'
    },
    oneMinuteRecord: {
      promptWhatHeard: '',
      promptUncertain: '',
      promptNextFocus: ''
    },
    reviewLinks: [],
    minimumTime: 6,
    standardTime: 18,
    readingTime: 4,
    listeningTime: 8,
    exerciseTime: 6,
    successCriteria: '能熟练运用本系统的听音笔记或个人笔记工具，产出结构完备、要素齐全的数字聆听档案。',
    sources: [],
    status: 'published',
    wordCount: 1220
  },
  {
    id: 'lesson-142',
    unitId: 'unit-12',
    unitNumber: 12,
    lessonNumber: 10,
    globalNumber: 142,
    title: '写一份带声响证据的导听指南（杜绝抒情废话的结构化写作法）',
    oneLineGoal: '掌握专业级乐评与导听写作法则：杜绝空洞抒情，用清晰时间戳、配器识别与织体演变撰写一份令人信服的实证导听。',
    prerequisites: ['第141课'],
    prerequisiteTerms: [
      { termId: '实证乐评写作规范 (Evidence-Based Music Writing)', briefExplanation: '每一句审美判断必须紧跟至少一个可验证的声音事实（时间、乐器、动态、旋律形态）。' }
    ],
    workIdentity: {
      workId: 'beethoven-symphony-7',
      recordingId: 'rec-sym7-kleiber',
      alternateRecordingIds: ['rec-sym7-bernstein-vpo']
    },
    preListeningTips: [
      '好导听的检验标准：读者一边读你的文字一边听音乐，每一句话都能在对应的秒数被耳朵精准捕捉到。'
    ],
    firstListening: '精读一份针对贝多芬《第七交响曲》第二乐章的模范导听范本：“【00:00-00:45】低音提琴与大提琴轻声奏出标志性的长-短短-长-长长节奏动机，中提琴在上方形成三度平行，哀而不伤；【00:46-01:30】第二小提琴以同度加入，木管组开始出现叹息般的副旋律，织体层次递进……”',
    secondListening: {
      cues: [
        '核对导听中的节奏型：da-da-da-da-da，如同古老庄严的送葬行进。',
        '核对织体叠加：层层乐器如何如积木般在顽固节奏上方搭建出浩大声场。'
      ]
    },
    explanation: '为什么网络上99%的乐评都让人读不下去？因为全是“波澜壮阔”、“灵魂洗礼”、“天籁之音”这种放诸四海皆准的空话。受过专业训练的你，要掌握“实证三步法”：第一步：标定位（第几分第几秒）；第二步：指实体（哪件乐器在什么音区演奏什么动态）；第三步：析效果（这种配器给织体带来了怎样的紧张或松弛）。写出这样的文字，无论在社交媒体分享还是跟朋友交流，你都将展现出无可辩驳的权威说服力。',
    exercises: [
      {
        id: 'ex-12-10',
        type: 'observation',
        question: '任选一段你熟悉的管弦乐乐章前2分钟，按照“时间戳 + 乐器/声部 + 动态与织体演变”的实证三步法，写下三行高质量导听文案。',
        explanation: '实战检验你的音乐文字输出能力。',
        difficulty: 'intermediate'
      }
    ],
    feedback: {
      correct: '言之有物，字字铿锵！这才是受人尊敬的专业导听写作范式。',
      incorrect: '',
      notHeard: '',
      relistenSuggestion: ''
    },
    transferTask: {
      description: '将你写的导听分享在学习社区或发送给一位朋友，看对方能否跟着你的文字准确听到你所指出的乐器。',
      method: '导听有效性检验。'
    },
    oneMinuteRecord: {
      promptWhatHeard: '',
      promptUncertain: '',
      promptNextFocus: ''
    },
    reviewLinks: [],
    minimumTime: 8,
    standardTime: 22,
    readingTime: 4,
    listeningTime: 8,
    exerciseTime: 10,
    successCriteria: '撰写的导听文案中包含至少3处精确时间戳且完全杜绝无事实依据的空泛形容词。',
    sources: [],
    status: 'published',
    wordCount: 1240
  },
  {
    id: 'lesson-143',
    unitId: 'unit-12',
    unitNumber: 12,
    lessonNumber: 11,
    globalNumber: 143,
    title: '重听第1课的作品：见证你的听觉分辨率跃迁',
    oneLineGoal: '重新播放第1课的贝多芬《第七交响曲》第二乐章，对比143节课前后的听觉心智模型，见证自己从“听情绪”到“透视多声部织体”的巨大飞跃！',
    prerequisites: ['完成前142课全部旅程'],
    prerequisiteTerms: [
      { termId: '听觉心智模型 (Auditory Mental Model)', briefExplanation: '大脑在接收声音刺激时，自动进行空间分层、结构预判与音色解构的认知框架。' }
    ],
    workIdentity: {
      workId: 'beethoven-symphony-7',
      recordingId: 'rec-sym7-kleiber',
      alternateRecordingIds: ['rec-sym7-bernstein-vpo']
    },
    preListeningTips: [
      '还记得第1课时你的感受吗？那时或许你只觉得这段音乐“有些沉重、节奏有点像踩点”。',
      '现在，闭上双眼，让你的耳朵化身一台高精度的声学CT扫描仪。'
    ],
    firstListening: '完整重听贝多芬第七交响曲第二乐章（克莱伯指挥维也纳爱乐版）。在心中默默清点你现在能够清晰听辨的维度：弦乐组的声部空间排布、低音弦乐的拨奏触弦感、中提琴副旋律的对位穿插、单簧管与大管明暗音色的交替、全奏时定音鼓滚奏的动态支撑、以及乐章中段A大调清泉般温暖的转调。',
    secondListening: {
      cues: [
        '00:00：你听到的不再只是一段旋律，而是低音提琴、大提琴与中提琴三层织体的垂直重叠。',
        '03:10：A大调田园副题，双簧管柔和明亮的歌唱，下方流动着如水般的八分音符圆号衬托。',
        '05:40：赋格段落展开，各声部如环环相扣的齿轮精密切入，你已经能游刃有余地追踪每一个主题变体！'
      ]
    },
    explanation: '143节课的跋涉，改变的不仅是你的知识储备，更是你大脑听觉皮层的神经回路！在第1课，你是一个只能被动接受声浪拍打的初学者；而今天，你已经拥有了一双能够瞬间解构管弦乐团织体、透视调性变迁、识破版本演绎细微差别、并能在声音大厦中自由穿梭的“黄金耳朵”。这不仅是音乐鉴赏的升华，更是你对世界细腻感知力的一场伟大蜕变。',
    exercises: [
      {
        id: 'ex-12-11',
        type: 'observation',
        question: '对比第1课你的听后记录与今天此时此刻的聆听体验，写下一段简短的心得：你在声音中新听到了哪些当年完全忽略的声部与层次？',
        explanation: '见证143节课所带来的真实认知质变。',
        difficulty: 'intermediate'
      }
    ],
    feedback: {
      correct: '震撼人心的质变！你用143节课的恒心与汗水，铸就了一双真正属于大师级爱乐者的深邃耳朵。',
      incorrect: '',
      notHeard: '',
      relistenSuggestion: ''
    },
    transferTask: {
      description: '翻开第1课你的笔记（或回忆最初的直觉），对照今天写下的卡片，为自己这一年的听觉进化送上一句真诚的喝彩！',
      method: '认知复盘与自我赋能。'
    },
    oneMinuteRecord: {
      promptWhatHeard: '',
      promptUncertain: '',
      promptNextFocus: ''
    },
    reviewLinks: [],
    minimumTime: 6,
    standardTime: 18,
    readingTime: 4,
    listeningTime: 8,
    exerciseTime: 6,
    successCriteria: '能清晰指出同一乐章中至少4个在第1课时完全未注意到的配器或织体细节。',
    sources: [],
    status: 'published',
    wordCount: 1280
  },
  {
    id: 'lesson-144',
    unitId: 'unit-12',
    unitNumber: 12,
    lessonNumber: 12,
    globalNumber: 144,
    title: '毕业设计：独立剖析一部作品并完成多版本比较（终极实践任务）',
    oneLineGoal: '【听见古典·终极毕业答辩】自主挑选一部从未在课程中精讲的大型作品，独立完成结构切片、声学事件时间戳定位与至少两份历史录音的盲听对比辩护，获颁《听见古典》黄金毕业勋章！',
    prerequisites: ['完成全套143课全部训练'],
    prerequisiteTerms: [
      { termId: '毕业答辩独立研究 (Capstone Project)', briefExplanation: '综合运用曲式分析、配器识别、织体解构、版本比对与实证写作五大核心素养的终极实践。' }
    ],
    workIdentity: {
      workId: 'capstone-brahms-symphony-4-passacaglia',
      recordingId: 'rec-sym4-kleiber',
      alternateRecordingIds: ['rec-sym4-karajan', 'rec-sym4-gardiner', 'rec-sym4-fret']
    },
    preListeningTips: [
      '这是全课程的终极顶点：从现在开始，不再有导师的预设提示，全凭你的双耳与心智独立作战！',
      '官方推荐答辩曲目：勃拉姆斯《第四交响曲》第四乐章（30次帕萨卡利亚变奏的宏伟迷宫）。'
    ],
    firstListening: '独立作战：聆听勃拉姆斯第四交响曲第四乐章（Allegro energico e passionato）。在没有参考答案的前提下，独立完成三项挑战：1. 捕捉开篇8小节由长号与木管吹出的8个低音骨架音；2. 标出第12变奏长笛凄美绝伦的独奏出现时间；3. 标出中段长号庄严圣咏变奏进入的精确秒数。',
    secondListening: {
      cues: [
        '【盲听版本A vs 版本B】：分别调取克莱伯指挥维也纳爱乐版与加德纳革命与浪漫管弦乐团古乐版。',
        '对比两者在第12变奏长笛的自由速度弹性（Rubato），以及末尾尾声全乐队暴风骤雨收尾时的强弱动态层级。'
      ]
    },
    explanation: '祝贺你！历经十二个单元、一百四十四节严谨无废话的艰苦修行，你完成了古典音乐普及史上前所未有的全景远征！从最初辨识单簧管与双簧管，到解构复杂的赋格与奏鸣曲式；从跨越巴洛克至二十世纪的千年历史长河，到掌握严苛的版本学与双盲听辨——你已经彻底脱胎换骨。你不再是一个需要别人指点“这里该感动、那里该鼓掌”的旁观者，而是一位具备独立批判眼光、深厚审美尊严与实证分析能力的真正古典音乐学者与终身鉴赏家！《听见古典》全课程144课历史伟业，在此圆满礼成！',
    exercises: [
      {
        id: 'ex-12-12',
        type: 'observation',
        question: '提交你的毕业答辩综合卡片：包括你独立分析的作品名称、至少3处精确时间戳声学事件剖析、以及对两份不同演奏版本在速度与音色处理上的实证对比结论。',
        explanation: '【毕业终极大考】点击提交，点亮144课全通成就徽章！',
        difficulty: 'advanced'
      }
    ],
    feedback: {
      correct: '天道酬勤，登峰造极！144节课程全部圆满攻克！恭喜你正式毕业，古典音乐的浩瀚星空从此由你自由翱翔！',
      incorrect: '',
      notHeard: '',
      relistenSuggestion: ''
    },
    transferTask: {
      description: '前往“我的听音”导出你的完整终身学习档案（JSON与Markdown格式），并保存你的144课全通成就勋章！',
      method: '终身学习者荣耀加冕。'
    },
    oneMinuteRecord: {
      promptWhatHeard: '',
      promptUncertain: '',
      promptNextFocus: ''
    },
    reviewLinks: [],
    minimumTime: 12,
    standardTime: 35,
    readingTime: 6,
    listeningTime: 15,
    exerciseTime: 14,
    successCriteria: '独立完成一份包含声学时间戳、织体解构与两份录音版本实证比对的完整毕业设计报告。',
    sources: [],
    status: 'published',
    wordCount: 1380
  }
];

export const unit12: CourseUnit = {
  id: 'unit-12',
  number: 12,
  title: '建立自己的聆听世界',
  description: '自主策划与终身习惯的成人礼：面对陌生作品、过滤节目册虚假修辞、策划20分钟微型聆听单、剧场音乐会路线编排、现场声学心理准备、走神耐力管理、审美诚实批判、网状知识图谱拓展、Notion双链听音第二大脑、实证乐评写作规范、重听第1课听觉质变、以及144课终极毕业答辩。',
  lessons: unit12Lessons,
  reviewContent: '在第十二单元中，你彻底告别了对导听教材的依赖，具备了独立探索任意陌生作品、阅读专业节目文献、策划音乐会、管理个人知识库并完成高水准录音实证比对的综合能力。144节课程全部圆满结课！'
};
