import { Work } from '@/lib/types';

export const extendedWorks: Work[] = [
  {
    "id": "bach-wtc1-prelude-c",
    "title": "C 大调前奏曲",
    "titleOriginal": "Prelude in C major, BWV 846",
    "nickname": "平均律第一首前奏曲",
    "nicknameNote": "选自《平均律键盘曲集》第一卷",
    "composerId": "composer-bach",
    "opusNumber": "BWV 846",
    "catalogSystem": "BWV (巴赫作品目录)",
    "genre": "键盘独奏 / 前奏曲",
    "instrumentation": "羽管键琴、古钢琴或现代钢琴",
    "compositionYear": 1722,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "前奏曲",
        "durationRange": [
          2,
          3
        ]
      }
    ],
    "totalDurationRange": [
      2,
      3
    ],
    "difficulty": "beginner",
    "difficultyReason": "结构极其清晰规整，只有一种持续的琶音织体，非常适合初学者练习注意力集中。",
    "whyListenNow": "这是进入古典音乐世界的黄金第一步：在没有歌词和复杂大乐队干扰的情况下，体验纯粹和声的呼吸。",
    "prerequisiteKnowledge": "知道键盘上的和弦可以一次性按下，也可以像流水一样拆开一个个弹（琶音）。",
    "listeningTaskFirst": "闭上眼睛听一遍，只观察伴奏音型从头到尾有没有中断过哪怕一秒。",
    "listeningTaskSecond": "注意第24小节前后（大约后半段），低音音符开始长时间持续在一个深沉的音上，上方音符显得格外紧张。",
    "listeningTaskDeep": "比较古乐器羽管键琴（声音清脆如金属拨弦、不能渐强渐弱）与现代大三角钢琴（声音温润饱满、余音连绵）的不同听觉感受。",
    "auralEvents": [
      {
        "description": "开头的纯净主和弦琶音",
        "whatToNotice": "每一个和弦被拆分成均匀的8个音符（向上攀升再重复后半段），像微风拂过水面。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "乐曲第一声键起",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "持续音（Pedal Point）造成的悬念与张力",
        "whatToNotice": "左手低音稳稳扎根在 G 音长达数个小节，上方的和弦不断制造不协和与摩擦，让人迫切期待解决。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "后半段低音停止走动、长时间固定在同一个深音时",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "最后两个大和弦的宁静落地",
        "whatToNotice": "奔流不息的分解音符终于收束，以两个宽厚笃定的纯正和弦宣告回家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "最后五秒钟",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "structureDiagram": {
      "type": "simplified",
      "label": "教学简化和声路线",
      "sections": [
        {
          "name": "出发（主和弦区）",
          "description": "确立明朗纯净的 C 大调色彩",
          "color": "#5C7A8B"
        },
        {
          "name": "漫游（离调与色彩游移）",
          "description": "和弦颜色逐渐变暗、出现微小的阴影与纠结",
          "color": "#8B7355"
        },
        {
          "name": "蓄势（低音持续张力）",
          "description": "强大的属持续音把期待值拉到顶点",
          "color": "#7B3239"
        },
        {
          "name": "归家（终止式）",
          "description": "重回大地，平稳沉静收束",
          "color": "#52695C"
        }
      ],
      "textAlternative": "全曲结构为：出发（主和弦区） -> 漫游（色彩渐暗） -> 蓄势（低音踏板音张力） -> 归家（平静收束）。"
    },
    "historicalContext": "巴赫创作《平均律键盘曲集》时担任科滕宫廷乐长。这部作品最初是写给学生和家庭练习的教学手册，旨在证明当时的十二平均律调律法可以让键盘乐器在所有24个大小调上都演奏出和谐悦耳的音乐。",
    "commonMisconceptions": "误区：以为古典键盘乐曲开头必须有明确的“副歌”或像流行歌曲一样的歌词。实际上，巴赫的前奏曲本质上是对某种特定织体（Texture）的极致探索。",
    "factVsInterpretation": "事实：整首乐曲由35小节持续的琶音织体构成。解释：古诺（Gounod）后来在巴赫这段伴奏上叠加了著名的《圣母颂》旋律，这是浪漫主义后人对巴赫的二次创作。",
    "isDeepGuide": true,
    "guideWordCount": 1950,
    "defaultRecordingId": "rec-bach-prelude-c-schiff",
    "alternateRecordingIds": [
      "rec-bach-prelude-c-aimard"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-11"
    ],
    "relatedConceptIds": [
      "concept-arpeggio",
      "concept-pedal-point"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [
      "bach-goldberg-variations",
      "chopin-prelude-op28-no1"
    ],
    "nextWorkId": "mozart-eine-kleine-k525",
    "nextWorkReason": "从单乐器键盘织体，迈向古典主义多声部弦乐对话。",
    "deepGuide": {
      "materialReturns": "全曲没有传统主题的完整再现，而是靠低音线条的下行阶梯（Bassline）作为暗线牵引整个曲子的前进。",
      "movementRelationships": "在《平均律》中，紧随这首前奏曲的是一首极其精密严谨的四声部赋格曲。",
      "specificComparisons": "安德拉斯·希夫（András Schiff）的演奏几乎不踩延音踏板，颗粒感极其晶莹透亮；而许多浪漫派钢琴家则运用丰富的踏板营造朦胧如烟的印象派色彩。",
      "sessionSuggestion": "建议第一次先听钢琴版感受声部；第二天换羽管键琴版对比音色；第三天对照乐谱或可视化动效追踪低音。",
      "furtherReading": []
    },
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-eine-kleine-k525",
    "title": "G 大调弦乐小夜曲",
    "titleOriginal": "Eine kleine Nachtmusik, K. 525",
    "nickname": "小夜曲",
    "composerId": "composer-mozart",
    "opusNumber": "K. 525",
    "catalogSystem": "K. (克歇尔目录)",
    "genre": "室内乐 / 嬉游曲",
    "instrumentation": "弦乐队（第一、第二小提琴、中提琴、大提琴与低音提琴）",
    "compositionYear": 1787,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro (快板)",
        "durationRange": [
          5,
          6
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Romanze: Andante (浪漫曲)",
        "durationRange": [
          5,
          6
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Menuetto: Allegretto (小步舞曲)",
        "durationRange": [
          2,
          3
        ]
      },
      {
        "id": "mov-04",
        "number": 4,
        "title": "IV. Rondo: Allegro (回旋曲)",
        "durationRange": [
          3,
          4
        ]
      }
    ],
    "totalDurationRange": [
      16,
      20
    ],
    "difficulty": "beginner",
    "difficultyReason": "莫扎特最著名的代表作之一，第一乐章奏鸣曲式的呈示、展开、再现轮廓犹如教科书般清晰。",
    "whyListenNow": "学习如何听出交响乐与室内乐中“问答式”的乐句呼应。",
    "prerequisiteKnowledge": "知道弦乐队里提琴家族由小到大、音色由高到低的层次分布。",
    "listeningTaskFirst": "听第一乐章开头：注意那声著名的号角般冲天而起的主题，随后全乐团是如何在弱音里窃窃私语的。",
    "listeningTaskSecond": "留心大约1分30秒时，乐团是否把从00:00开始的内容原原本本地再演奏了一遍（反复记号）。",
    "auralEvents": [
      {
        "description": "第一主题的“火箭式”上行与下行答句",
        "whatToNotice": "高音齐奏向上冲刺（如同提问），随后轻巧优雅地下行滑落（如同从容回答）。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "第1秒开门见山",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "歌唱性的第二主题",
        "whatToNotice": "从阳刚大气的齐奏转为极其柔媚细腻的连音，小提琴在上方轻盈起舞。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "约45秒后调性转入属调",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "展开部短促的转折与再现部的凯旋",
        "whatToNotice": "进入暗调色彩短暂停留后，开头的冲天大主题再次光芒四射地归来。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "乐章约后半程再现部开启",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "作于1787年夏天维也纳，与歌剧《唐璜》同时期创作。小夜曲在当时主要用于贵族户外晚宴、庆典或社交聚会，因此具有极高的愉悦性与社交雅致感。",
    "isDeepGuide": true,
    "guideWordCount": 1100,
    "defaultRecordingId": "rec-mozart-k525-freiburger",
    "alternateRecordingIds": [
      "rec-mozart-k525-karajan"
    ],
    "relatedCourseIds": [
      "lesson-02"
    ],
    "relatedConceptIds": [
      "concept-sonata-form",
      "concept-tutti"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [
      "beethoven-symphony-5"
    ],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-symphony-5",
    "title": "C 小调第五交响曲",
    "titleOriginal": "Symphony No. 5 in C minor, Op. 67",
    "nickname": "命运交响曲",
    "nicknameNote": "“命运敲门”为后人传闻称号，非贝多芬乐谱标题",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 67",
    "catalogSystem": "Opus",
    "genre": "管弦乐 / 交响曲",
    "instrumentation": "双管编制大型管弦乐团",
    "compositionYear": 1808,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro con brio",
        "durationRange": [
          7,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Andante con moto",
        "durationRange": [
          9,
          11
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Scherzo: Allegro",
        "durationRange": [
          5,
          6
        ]
      },
      {
        "id": "mov-04",
        "number": 4,
        "title": "IV. Allegro",
        "durationRange": [
          9,
          11
        ]
      }
    ],
    "totalDurationRange": [
      32,
      36
    ],
    "difficulty": "intermediate",
    "difficultyReason": "结构紧密如钢铁，第一乐章由一个极短的四音动机衍生出整个宏伟世界。",
    "whyListenNow": "理解西方古典音乐最高成就的核心技巧：“动机发展（Motivic Development）”。",
    "prerequisiteKnowledge": "知道什么是乐曲的“动机”——最短小但特征最鲜明的细胞。",
    "listeningTaskFirst": "听第一乐章：数一数“短短短长（嗒嗒嗒铛——）”这个节奏型在不同乐器、不同高低音区之间传递了多少次。",
    "listeningTaskSecond": "注意在大约中段高潮突然安静下来时，一把孤单的双簧管吹出的极其凄凉的独白（华彩）。",
    "auralEvents": [
      {
        "description": "开天辟地的命运四音动机",
        "whatToNotice": "全乐队无伴奏强奏，两个长长的延长音让时间瞬间凝固。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "乐曲前三秒",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "双簧管凄凉独奏（Cadenza）",
        "whatToNotice": "战火纷飞的乐队怒涛中突然万籁俱寂，一把双簧管如泣如诉地自语。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "第一乐章再现部前夕",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "三四乐章之间无缝直通的光明爆发",
        "whatToNotice": "定音鼓在极弱的幽暗中敲击，随后长号与全体乐队瞬间炸裂出耀眼的光芒。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "第三乐章连接第四乐章处",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "创作于贝多芬逐渐意识到自己耳疾已不可逆转的绝望时期。贝多芬在《海利根施塔特遗嘱》中几乎想要自杀，但他宣称“唯有艺术留住了我”，随后以无比顽强的意志爆发出了第五交响曲这样由黑暗冲向光明的划时代巨作。",
    "isDeepGuide": true,
    "guideWordCount": 2200,
    "defaultRecordingId": "rec-beethoven-sym5-kleiber",
    "alternateRecordingIds": [
      "rec-beethoven-sym5-gardiner"
    ],
    "relatedCourseIds": [
      "lesson-07"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-crescendo"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [
      "mozart-eine-kleine-k525",
      "debussy-clair-de-lune"
    ],
    "sources": [],
    "status": "published"
  },
  {
    "id": "debussy-clair-de-lune",
    "title": "月光",
    "titleOriginal": "Clair de lune",
    "composerId": "composer-debussy",
    "genre": "钢琴独奏",
    "instrumentation": "钢琴",
    "compositionYear": 1890,
    "era": "twentieth-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "月光",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      4,
      6
    ],
    "difficulty": "beginner",
    "difficultyReason": "意境优美朦胧，极适合体验印象派对音色、和声光影与时间的独特处理。",
    "whyListenNow": "学会感受音乐如何从德奥严谨的逻辑建筑，转变为法国式的光影色彩与梦幻气氛。",
    "prerequisiteKnowledge": "知道印象派绘画（如莫奈睡莲）不强调边缘线，注重光线瞬时反射；德彪西在声音里追求同样的质感。",
    "listeningTaskFirst": "感受音符之间似乎没有生硬的节拍敲击，像浮云一样在空气中游移漂浮。",
    "listeningTaskSecond": "中间段落音符突然如泉水般流淌起来，随后又重回宁静。",
    "auralEvents": [
      {
        "description": "开头极其柔和的高音下坠",
        "whatToNotice": "触键极其微弱（pp），三度音程像月光洒落在夜色静止的水面上。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "乐曲前30秒",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "流动的中段琶音浪潮",
        "whatToNotice": "左手琶音如微波荡漾，右手旋律变得更加深情宽广。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "全曲中段推高处",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "灵感源于法国象征主义诗人保罗·魏尔伦的同名抒情诗《月光》（“你的灵魂是一方优美的风景……”）。",
    "isDeepGuide": true,
    "guideWordCount": 880,
    "defaultRecordingId": "rec-debussy-moon-michelangeli",
    "alternateRecordingIds": [],
    "relatedCourseIds": [
      "lesson-04"
    ],
    "relatedConceptIds": [
      "concept-impressionism",
      "concept-timbre"
    ],
    "relatedComposerId": "composer-debussy",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "ravel-bolero",
    "title": "波莱罗",
    "titleOriginal": "Boléro",
    "composerId": "composer-ravel",
    "genre": "管弦乐 / 舞曲",
    "instrumentation": "超大型交响管弦乐团",
    "compositionYear": 1928,
    "era": "twentieth-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "Boléro",
        "durationRange": [
          14,
          16
        ]
      }
    ],
    "totalDurationRange": [
      14,
      16
    ],
    "difficulty": "beginner",
    "difficultyReason": "全曲仅有单一旋律和单一节奏型，通过乐器一件件累加实现教科书般的音色演变。",
    "whyListenNow": "这是认识整个交响乐团所有木管、铜管与打击乐器音色的无上宝典。",
    "prerequisiteKnowledge": "知道管弦乐队里长笛清亮、单簧管圆润、巴松低沉、萨克斯风慵懒的质感差异。",
    "listeningTaskFirst": "追踪小军鼓的敲击：感受它像一台不知疲倦的精密钟表，自始至终绝对不加速。",
    "listeningTaskSecond": "每当旋律重新开始时，辨认是哪一件新的乐器加入了队伍。",
    "auralEvents": [
      {
        "description": "长笛单独吹出第一遍主题",
        "whatToNotice": "声音极轻柔，背景仅有极弱的拨弦和小军鼓。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开头第15秒起",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "罕见的高音萨克斯风进入",
        "whatToNotice": "爵士风味的音色注入传统的古典乐队中，带来迷离异域风情。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "约6分钟处",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "临终前的突然转调与崩塌",
        "whatToNotice": "全曲十几分钟都在C大调上，突然在结尾暴烈转入E大调，铜管发出怪诞的滑音，全曲在狂欢中收尾。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "最后1分钟处",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "受舞蹈家伊达·鲁宾斯坦委托创作的芭蕾舞剧音乐，场景设定在西班牙的一间酒馆内，舞者在桌上随着音乐越来越狂热起舞。",
    "isDeepGuide": true,
    "guideWordCount": 1050,
    "defaultRecordingId": "rec-bolero-boulez",
    "alternateRecordingIds": [],
    "relatedCourseIds": [
      "lesson-05"
    ],
    "relatedConceptIds": [
      "concept-orchestration",
      "concept-ostinato"
    ],
    "relatedComposerId": "composer-ravel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "vivaldi-four-seasons-spring",
    "title": "E 大调第一小提琴协奏曲《春》",
    "titleOriginal": "La Primavera, RV 269",
    "nickname": "四季·春",
    "composerId": "composer-vivaldi",
    "opusNumber": "Op. 8 No. 1 / RV 269",
    "genre": "协奏曲 / 独奏小提琴协奏曲",
    "instrumentation": "独奏小提琴、弦乐合奏与通奏低音（羽管键琴）",
    "compositionYear": 1723,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro (快板·春临大地)",
        "durationRange": [
          3,
          4
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Largo (广板·牧童与忠犬)",
        "durationRange": [
          2,
          3
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Allegro pastorale (乡村舞曲)",
        "durationRange": [
          4,
          5
        ]
      }
    ],
    "totalDurationRange": [
      9,
      11
    ],
    "difficulty": "beginner",
    "difficultyReason": "标题音乐的最早代表作之一，旋律朗朗上口，鸟鸣、雷雨与小溪流水形象极其直观。",
    "whyListenNow": "学会区分巴洛克大协奏曲中“齐奏（所有人一起）”与“独奏（一把提琴炫技）”的轮流交替。",
    "prerequisiteKnowledge": "知道维瓦尔第在乐谱上亲自写下了对应的十四行诗。",
    "listeningTaskFirst": "听第一乐章：你能听出乐团齐奏春天主题后，哪几声是三把小提琴在模仿鸟儿互相啾啾叫吗？",
    "listeningTaskSecond": "注意雷雨暴风突降的段落：全体弦乐以疯狂的低音颤音代表闪电打雷，随后独奏小提琴飞速翻飞。",
    "auralEvents": [
      {
        "description": "春临大地的齐奏大主题（Ritornello）",
        "whatToNotice": "欢乐、明媚、全员一气呵成的开门见山。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场前30秒",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "三把提琴的林间鸟鸣独奏",
        "whatToNotice": "底层低音乐器完全静止，只有高音小提琴在颤音啼唱。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "齐奏停下后",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "暴风雨与雷鸣突袭",
        "whatToNotice": "弦乐低音狂暴锯弦颤音，独奏小提琴如疾风骤雨。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "约1分15秒前后",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "维瓦尔第在威尼斯皮耶塔女子孤儿院任教期间创作，这些女孤儿乐手技艺惊人，维瓦尔第为她们量身打造了极高难度的炫技协奏曲。",
    "isDeepGuide": true,
    "guideWordCount": 1100,
    "defaultRecordingId": "rec-spring-carmignola",
    "alternateRecordingIds": [
      "rec-spring-biondi"
    ],
    "relatedCourseIds": [
      "lesson-10"
    ],
    "relatedConceptIds": [
      "concept-concerto",
      "concept-tutti"
    ],
    "relatedComposerId": "composer-vivaldi",
    "relatedWorkIds": [
      "bach-wtc1-prelude-c"
    ],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-fur-elise",
    "title": "A 小调回旋曲《致爱丽丝》",
    "titleOriginal": "Für Elise, WoO 59",
    "nickname": "致爱丽丝",
    "composerId": "composer-beethoven",
    "opusNumber": "WoO 59",
    "genre": "钢琴独奏 / 钢琴小品",
    "instrumentation": "钢琴",
    "compositionYear": 1810,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "Poco moto",
        "durationRange": [
          3,
          4
        ]
      }
    ],
    "totalDurationRange": [
      3,
      4
    ],
    "difficulty": "beginner",
    "difficultyReason": "世人最熟知的旋律，却蕴含极其标准的A-B-A-C-A回旋曲式架构与强烈的性格对比。",
    "whyListenNow": "学会用结构的大脑听熟知名曲：不再只满足于听开头的A段，发现中间暗藏的暴风雨。",
    "prerequisiteKnowledge": "知道WoO代表“无作品编号（Werke ohne Opuszahl）”。",
    "listeningTaskFirst": "数一数开头的“咪-来-咪-来-咪-西-热-都-拉”在整首乐曲里完整出现了几次。",
    "listeningTaskSecond": "注意在第三次出现A段之前，左手低音突然持续快速敲打一个音，右手爆发出戏剧性怒涛。",
    "auralEvents": [
      {
        "description": "A段主题：优雅深情的半音交替",
        "whatToNotice": "右手两个琴键来回倒换，左手琶音轻轻托起。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开门见山",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "B段对比：明快欢欣的春日步态",
        "whatToNotice": "突然转入F大调，右手三十秒飞速滑音如欢笑。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "约1分钟处",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "C段对比：暴风雨般的怒吼与不安",
        "whatToNotice": "左手同音反复如紧迫鼓点，贝多芬标志性的狂暴意志显现。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "约2分钟前后",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "贝多芬手稿于其去世后近四十年才被学者诺尔发现，题献名字很可能是贝多芬字迹潦草将特蕾泽（Therese）误读为爱丽丝（Elise）。",
    "isDeepGuide": true,
    "guideWordCount": 950,
    "defaultRecordingId": "rec-elise-kempff",
    "alternateRecordingIds": [
      "rec-elise-brendel"
    ],
    "relatedCourseIds": [
      "lesson-12"
    ],
    "relatedConceptIds": [
      "concept-rondo",
      "concept-motif"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [
      "mozart-eine-kleine-k525"
    ],
    "sources": [],
    "status": "published"
  },
  {
    "id": "chopin-nocturne-op9-no2",
    "title": "降 E 大调夜曲",
    "titleOriginal": "Nocturne in E-flat major, Op. 9 No. 2",
    "nickname": "最著名的肖邦夜曲",
    "composerId": "composer-chopin",
    "opusNumber": "Op. 9 No. 2",
    "genre": "钢琴独奏 / 夜曲",
    "instrumentation": "钢琴",
    "compositionYear": 1832,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "Andante",
        "durationRange": [
          4,
          5
        ]
      }
    ],
    "totalDurationRange": [
      4,
      5
    ],
    "difficulty": "beginner",
    "difficultyReason": "极致的浪漫派美声歌唱性（Bel Canto）移植到钢琴键盘上的典范。",
    "whyListenNow": "学会感受什么叫“让钢琴像人类声带一样叹息和歌唱”。",
    "prerequisiteKnowledge": "知道夜曲由爱尔兰作曲家约翰·菲尔德首创，肖邦将其升华为诗意极境。",
    "listeningTaskFirst": "右手的旋律重复了三次，注意每一次重复时，肖邦给它添加了多少玲珑剔透的小装饰音。",
    "listeningTaskSecond": "留意乐曲最后那一串如珍珠般从高音区滑落的华彩（Cadenza）与轻声收尾。",
    "auralEvents": [
      {
        "description": "第一声叹息般的歌唱主题呈示",
        "whatToNotice": "左手均匀的12/8拍圆舞摇篮伴奏，右手如女高音般娓娓道来。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场前15秒",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "第二次重复时的精巧装饰音",
        "whatToNotice": "旋律骨架未变，但音符像蕾丝花边一样层层刺绣增多。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "约1分30秒",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "作于肖邦流亡抵达巴黎不久，在普莱耶尔钢琴沙龙中引起了全欧洲贵族与艺术家的轰动。",
    "isDeepGuide": true,
    "guideWordCount": 920,
    "defaultRecordingId": "rec-nocturne-rubinstein",
    "alternateRecordingIds": [
      "rec-nocturne-pires"
    ],
    "relatedCourseIds": [
      "lesson-04"
    ],
    "relatedConceptIds": [
      "concept-rubato"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [
      "debussy-clair-de-lune"
    ],
    "sources": [],
    "status": "published"
  },
  {
    "id": "tchaikovsky-swan-lake",
    "title": "《天鹅湖》场景音乐",
    "titleOriginal": "Swan Lake Suite, Op. 20 - Scene",
    "nickname": "天鹅主题",
    "composerId": "composer-tchaikovsky",
    "opusNumber": "Op. 20",
    "genre": "芭蕾舞剧音乐 / 管弦乐",
    "instrumentation": "大型管弦乐团",
    "compositionYear": 1876,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "Scene (Moderato)",
        "durationRange": [
          3,
          4
        ]
      }
    ],
    "totalDurationRange": [
      3,
      4
    ],
    "difficulty": "beginner",
    "difficultyReason": "管弦乐色彩与戏剧旋律的绝顶融合，双簧管音色塑造角色的不朽里程碑。",
    "whyListenNow": "学会听双簧管在乐队中如何以一声幽怨撕裂夜色。",
    "prerequisiteKnowledge": "知道天鹅湖讲述奥杰塔公主被魔王施法化为白天鹅的悲剧爱情。",
    "listeningTaskFirst": "听开头的弦乐颤音与竖琴水波：舞台上的浓雾湖面是如何被纯声音瞬间勾勒出来的。",
    "listeningTaskSecond": "注意双簧管吹出的纯洁天鹅主题，随后全乐队铜管是如何将其推向悲剧宿命的高潮。",
    "auralEvents": [
      {
        "description": "弦乐低音颤音与幽暗水波展开",
        "whatToNotice": "定音鼓微弱滚奏，双簧管破空而出。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开头第10秒",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "首演于莫斯科大剧院时因编舞粗糙曾遭冷遇，直到柴可夫斯基去世后由佩蒂帕重新编舞才成为世界芭蕾舞剧无可撼动的王冠之珠。",
    "isDeepGuide": true,
    "guideWordCount": 890,
    "defaultRecordingId": "rec-swan-lake-previn",
    "alternateRecordingIds": [],
    "relatedCourseIds": [
      "lesson-17"
    ],
    "relatedConceptIds": [
      "concept-timbre"
    ],
    "relatedComposerId": "composer-tchaikovsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "liang-zhu-violin-concerto",
    "title": "《梁山伯与祝英台》小提琴协奏曲",
    "titleOriginal": "The Butterfly Lovers Violin Concerto",
    "nickname": "梁祝",
    "composerId": "composer-he-chen",
    "genre": "协奏曲 / 单乐章综合体裁",
    "instrumentation": "独奏小提琴与交响管弦乐团",
    "compositionYear": 1959,
    "era": "twentieth-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "单乐章奏鸣曲式（相爱-抗婚-化蝶）",
        "durationRange": [
          24,
          28
        ]
      }
    ],
    "totalDurationRange": [
      24,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "中国民族音乐与西方交响乐奏鸣曲式完美融合的二十世纪世界级经典。",
    "whyListenNow": "看西洋小提琴如何惟妙惟肖地演奏出中国越剧的戏曲滑指、慢吟与断肠哭灵。",
    "prerequisiteKnowledge": "由上海音乐学院学生何占豪、陈钢创作，俞丽拿首演。",
    "listeningTaskFirst": "听开门见山鸟语花香的长笛与竖琴，随后独奏小提琴拉出如泣如诉的“草桥结拜”大主题。",
    "listeningTaskSecond": "注意“抗婚”段落铜管乐器蛮横凶残的重击，与小提琴如泣如诉反抗的激烈戏剧冲突。",
    "auralEvents": [
      {
        "description": "草桥结拜·纯美主题呈示",
        "whatToNotice": "小提琴运用大量二胡式的细腻滑音和揉弦，充满江南水乡的温婉。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "长笛引子过后",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "楼台会·大提琴与小提琴的人声深情对唱",
        "whatToNotice": "大提琴代表梁山伯，小提琴代表祝英台，声部交织泪眼相看。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "乐曲中段慢板",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "哭灵投坟与化蝶长生",
        "whatToNotice": "锣鼓齐鸣坟墓裂开，随后竖琴与长笛重新唤回彩蝶翩翩起舞。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "乐曲高潮与尾声",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1959年国庆十周年献礼作品，探索“交响乐民族化”的划时代丰碑，成为全球华人世界情感辨识度最高的交响图腾。",
    "isDeepGuide": true,
    "guideWordCount": 2100,
    "defaultRecordingId": "rec-liangzhu-yulina",
    "alternateRecordingIds": [
      "rec-liangzhu-shaham"
    ],
    "relatedCourseIds": [
      "lesson-24"
    ],
    "relatedConceptIds": [
      "concept-concerto",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-he-chen",
    "relatedWorkIds": [
      "mozart-eine-kleine-k525"
    ],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bach-brandenburg-concerto-3",
    "title": "G大调第三勃兰登堡协奏曲",
    "titleOriginal": "Brandenburg Concerto No. 3 in G major, BWV 1048",
    "nickname": "勃兰登堡三号",
    "composerId": "composer-bach",
    "opusNumber": "BWV 1048",
    "genre": "大协奏曲",
    "instrumentation": "九件独奏弦乐（3小提琴、3中提琴、3大提琴）与通奏低音",
    "compositionYear": 1721,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. [Allegro]",
        "durationRange": [
          5,
          6
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio (两和弦过渡)",
        "durationRange": [
          0.5,
          1
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Allegro",
        "durationRange": [
          4,
          5
        ]
      }
    ],
    "totalDurationRange": [
      10,
      12
    ],
    "difficulty": "beginner",
    "difficultyReason": "九件弦乐器如精密齿轮般对位穿梭，节奏欢腾充满无限动力。",
    "whyListenNow": "体会巴洛克复调织体如何不用任何独奏大明星，依靠九个声部平等交锋创造无上活力。",
    "prerequisiteKnowledge": "巴赫将六首协奏曲题献给勃兰登堡侯爵克里斯蒂安·路德维希。",
    "listeningTaskFirst": "听第一乐章：追踪开篇三个音下行动机，如何在三把小提琴与三把中提琴之间像传球一样击发。",
    "listeningTaskSecond": "第二乐章只有两个弗里吉亚半终止和弦，通常由羽管键琴即兴华彩连接。",
    "auralEvents": [
      {
        "description": "第一乐章主题齐奏呈示",
        "whatToNotice": "坚固如磐石的G大调三和弦下行律动。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:00-00:30",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "小提琴与中提琴声部呼应交错",
        "whatToNotice": "左右立体声两翼弦乐群的急速对答。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "01:45-02:30",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "第三乐章十二八拍吉格舞曲旋风",
        "whatToNotice": "十六分音符疾速飞驰如飞瀑倾泻。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "06:00-07:15",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1721年巴赫在科滕宫廷任职期间整理题献，因侯爵乐团编制不足甚至未能在当时首演。",
    "isDeepGuide": true,
    "guideWordCount": 2200,
    "defaultRecordingId": "rec-bach-brandenburg-concerto-3-ref",
    "alternateRecordingIds": [
      "rec-bach-brandenburg-concerto-3-alt1",
      "rec-bach-brandenburg-concerto-3-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bach-brandenburg-concerto-5",
    "title": "D大调第五勃兰登堡协奏曲",
    "titleOriginal": "Brandenburg Concerto No. 5 in D major, BWV 1050",
    "nickname": "勃兰登堡五号",
    "composerId": "composer-bach",
    "opusNumber": "BWV 1050",
    "genre": "大协奏曲 / 键盘协奏曲开山鼻祖",
    "instrumentation": "独奏羽管键琴、长笛、小提琴，弦乐队与通奏低音",
    "compositionYear": 1721,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro",
        "durationRange": [
          9,
          10
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Affettuoso",
        "durationRange": [
          5,
          6
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Allegro",
        "durationRange": [
          5,
          6
        ]
      }
    ],
    "totalDurationRange": [
      19,
      22
    ],
    "difficulty": "intermediate",
    "difficultyReason": "第一乐章末尾长达3分钟的羽管键琴狂暴独奏华彩，是西方历史上第一部键盘协奏曲雏形。",
    "whyListenNow": "见证羽管键琴从背景伴奏奴仆，一跃成为统治整个乐队的超级王者。",
    "prerequisiteKnowledge": "巴赫当年为科滕宫廷新购置的双层键盘大键琴量身定制。",
    "listeningTaskFirst": "听第一乐章尾声：小提琴与长笛突然完全停止，羽管键琴独占全场狂飙。",
    "listeningTaskSecond": "第二乐章三位独奏家（长笛、提琴、大键琴）的室内深情对白，管弦乐队完全休止。",
    "auralEvents": [
      {
        "description": "第一乐章主部全奏回文",
        "whatToNotice": "明朗灿烂的D大调阳光，三件独奏乐器穿插。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:00-01:00",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "史上首个巨型羽管键琴华彩段（Cadenza）",
        "whatToNotice": "双手飞速跑动、分解和弦如雷电交加。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "06:30-09:15",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "全乐队回归再现收尾",
        "whatToNotice": "暴风雨后全员坚实落地。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "09:20-09:50",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "巴赫亲自弹奏羽管键琴首演，彻底打破了键盘乐器只能做通奏低音背景的传统。",
    "isDeepGuide": true,
    "guideWordCount": 2350,
    "defaultRecordingId": "rec-bach-brandenburg-concerto-5-ref",
    "alternateRecordingIds": [
      "rec-bach-brandenburg-concerto-5-alt1",
      "rec-bach-brandenburg-concerto-5-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bach-wtc1-fugue-c-minor",
    "title": "C小调第二赋格曲（平均律上册）",
    "titleOriginal": "Fugue No. 2 in C minor, BWV 847",
    "composerId": "composer-bach",
    "opusNumber": "BWV 847",
    "genre": "赋格曲",
    "instrumentation": "独奏键盘乐器（羽管键琴 / 现代钢琴）",
    "compositionYear": 1722,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "Fuga II a 3 voci",
        "durationRange": [
          1.5,
          2
        ]
      }
    ],
    "totalDurationRange": [
      1.5,
      2
    ],
    "difficulty": "intermediate",
    "difficultyReason": "严格三声部赋格曲的教科书范本，主题短小精悍如咬字清晰的演说。",
    "whyListenNow": "掌握追踪赋格曲“主题（Subject）”在不同声部（中音部 -> 高音部 -> 低音部）依次进入的黄金法则。",
    "prerequisiteKnowledge": "巴赫《平均律键盘曲集》为证明十二平均律在所有24个大小调中皆可和谐演奏而作。",
    "listeningTaskFirst": "闭上眼睛，单数主题出现次数：开篇中音部单挑出场，数数后文它又在哪个手哪根手指下重新亮起。",
    "listeningTaskSecond": "感受密接和应与低音重击带来的终局收束。",
    "auralEvents": [
      {
        "description": "单声部主题独白亮相",
        "whatToNotice": "下行跳进与十六分音符回旋构成的标志性问话。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:00-00:08",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "高音声部答题切入，中音声部转为对题",
        "whatToNotice": "两条旋律如齿轮般交错。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:09-00:20",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "低音声部雄浑进入构成三声部汇聚",
        "whatToNotice": "底盘扎实，三条线条各自独立穿梭。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:21-00:35",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1722年巴赫在科滕完成平均律上册，汉斯·冯·彪罗誉其为音乐界的《旧约圣经》。",
    "isDeepGuide": true,
    "guideWordCount": 1450,
    "defaultRecordingId": "rec-bach-wtc1-fugue-c-minor-ref",
    "alternateRecordingIds": [
      "rec-bach-wtc1-fugue-c-minor-alt1",
      "rec-bach-wtc1-fugue-c-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bach-air-on-g",
    "title": "D大调第三管弦乐组曲·咏叹调（G弦上的咏叹调）",
    "titleOriginal": "Orchestral Suite No. 3 in D major: Air, BWV 1068",
    "nickname": "G弦上的咏叹调",
    "composerId": "composer-bach",
    "opusNumber": "BWV 1068",
    "genre": "管弦乐组曲 / 咏叹调",
    "instrumentation": "第一小提琴、第二小提琴、中提琴与通奏低音",
    "compositionYear": 1730,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "Air",
        "durationRange": [
          4,
          5.5
        ]
      }
    ],
    "totalDurationRange": [
      4,
      5.5
    ],
    "difficulty": "beginner",
    "difficultyReason": "西方音乐史上最安详崇高的旋律线条，如天鹅绒般丝滑，低音下行如平静心跳。",
    "whyListenNow": "体会第一小提琴超长连音呼吸与低音大提琴八分音符八度跳进平稳下行的奇妙平衡。",
    "prerequisiteKnowledge": "19世纪小提琴大师威廉密将其改编为仅在小提琴G弦（最粗低音弦）演奏的独奏曲，因而得名。",
    "listeningTaskFirst": "听低音声部的步伐：从第一小节开始，低音提琴一步一步往下稳稳迈步，从不高声喧哗。",
    "listeningTaskSecond": "听高音声部的不协和悬挂倚音如何向甘美和声温柔融化。",
    "auralEvents": [
      {
        "description": "第一小提琴长音神圣升腾",
        "whatToNotice": "极长的一弓持续音，下方低音如钟摆轻摇。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:00-00:45",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "内声部中提琴叹息切分",
        "whatToNotice": "和声色彩在微光中平滑移位。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "01:10-02:00",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "B段展开与终极安宁收束",
        "whatToNotice": "心灵彻底沉静放空。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "03:00-04:30",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "巴赫莱比锡大学音乐学会（Collegium Musicum）齐默尔曼咖啡馆演奏曲目。",
    "isDeepGuide": true,
    "guideWordCount": 1520,
    "defaultRecordingId": "rec-bach-air-on-g-ref",
    "alternateRecordingIds": [
      "rec-bach-air-on-g-alt1",
      "rec-bach-air-on-g-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bach-d-minor-chaconne",
    "title": "D小调第二无伴奏小提琴帕蒂塔·恰空",
    "titleOriginal": "Partita No. 2 in D minor, BWV 1004: Chaconne (Ciaccona)",
    "nickname": "大恰空",
    "composerId": "composer-bach",
    "opusNumber": "BWV 1004",
    "genre": "无伴奏小提琴舞曲",
    "instrumentation": "独奏小提琴（单把提琴无伴奏）",
    "compositionYear": 1720,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "V. Chaconne",
        "durationRange": [
          13,
          16
        ]
      }
    ],
    "totalDurationRange": [
      13,
      16
    ],
    "difficulty": "advanced",
    "difficultyReason": "单把小提琴四根琴弦上构筑的长达15分钟多声部变奏巍峨金字塔，技术与精神的双重极限。",
    "whyListenNow": "勃拉姆斯曾惊叹：“若非亲眼所见，我绝不相信仅用一把小提琴就能容纳整整一个精神宇宙的悲欢。”",
    "prerequisiteKnowledge": "巴赫随科滕公爵出游归家，惊悉爱妻玛利亚·芭芭拉突然暴病离世并已入土，悲痛中铸成此旷世哀歌。",
    "listeningTaskFirst": "辨识开篇4小节坚如磐石的三个三和弦双音琶音，这是贯穿全曲64次变奏的神圣骨架。",
    "listeningTaskSecond": "等待乐曲中段转入D大调（约07:00处）：阴云突然散开，天国金光洒下，随后再回归D小调终结。",
    "auralEvents": [
      {
        "description": "开篇命运宣言和弦",
        "whatToNotice": "四音和弦刮奏出的沉重庄严大理石巨壁。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:00-00:30",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "十六分音符琶音惊涛骇浪",
        "whatToNotice": "一把提琴同时演奏旋律、中音与低音三个声部。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "03:15-05:00",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "D大调天国金光圣咏变奏",
        "whatToNotice": "极度纯净祥和的救赎之光。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "07:10-09:30",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲开篇主题终极重现",
        "whatToNotice": "超越生死的大平静。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "13:00-14:30",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "西方器乐史上最伟大的独奏独白，被布索尼改编为钢琴超技大曲，被拉赫玛尼诺夫极度推崇。",
    "isDeepGuide": true,
    "guideWordCount": 2600,
    "defaultRecordingId": "rec-bach-d-minor-chaconne-ref",
    "alternateRecordingIds": [
      "rec-bach-d-minor-chaconne-alt1",
      "rec-bach-d-minor-chaconne-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "handel-messiah-complete",
    "title": "《弥赛亚》清唱剧（预言、救赎与复活）",
    "titleOriginal": "Messiah, HWV 56",
    "nickname": "弥赛亚",
    "composerId": "composer-handel",
    "opusNumber": "HWV 56",
    "genre": "清唱剧（神剧）",
    "instrumentation": "四位独唱家（SATB）、混声合唱团与管弦乐队",
    "compositionYear": 1741,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "第一部分：救主降生预言与牧羊人田园",
        "durationRange": [
          45,
          50
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "第二部分：受难、复活与《哈利路亚》大合唱",
        "durationRange": [
          40,
          45
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "第三部分：永生应许与《阿门》赋格",
        "durationRange": [
          30,
          35
        ]
      }
    ],
    "totalDurationRange": [
      120,
      140
    ],
    "difficulty": "intermediate",
    "difficultyReason": "西方声乐史上演出频率最高、传唱度最广的崇高史诗大剧。",
    "whyListenNow": "感受亨德尔如何用最雄浑朴素的大三和弦齐鸣与宏伟合唱，瞬间征服全人类的心灵。",
    "prerequisiteKnowledge": "英王乔治二世在伦敦听到《哈利路亚》大合唱时，情不自禁肃然起立，遂成全球起立聆听传统。",
    "listeningTaskFirst": "听《哈利路亚》大合唱：注意全员高呼“Hallelujah”与主调齐奏之间君临天下的崇高感。",
    "listeningTaskSecond": "听第三部分男低音《号角将响起》（The trumpet shall sound），自然小号与男低音在纯净音调上的对决。",
    "auralEvents": [
      {
        "description": "交响序曲（Sinfony）法式附点庄严开场",
        "whatToNotice": "典型的法式序曲附点威严律动。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:00-03:00",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "《哈利路亚》大合唱爆发",
        "whatToNotice": "全场雷动、四部合唱轮番呼啸“King of Kings”。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "Part II Finale",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲《神圣羔羊与阿门颂》巨型赋格",
        "whatToNotice": "长达四分钟层层递进的阿门对位大合唱。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "Part III Finale",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1741年亨德尔在都柏林仅用24天狂热写就，首演所有收益全部捐献当地慈善收容机构与医院。",
    "isDeepGuide": true,
    "guideWordCount": 2450,
    "defaultRecordingId": "rec-handel-messiah-complete-ref",
    "alternateRecordingIds": [
      "rec-handel-messiah-complete-alt1",
      "rec-handel-messiah-complete-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-handel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "handel-water-music",
    "title": "《水上音乐》组曲",
    "titleOriginal": "Water Music, HWV 348-350",
    "nickname": "水上音乐",
    "composerId": "composer-handel",
    "opusNumber": "HWV 348-350",
    "genre": "管弦乐组曲 / 露天盛典音乐",
    "instrumentation": "双管弦乐队、法国号（圆号）、小号、横笛与通奏低音",
    "compositionYear": 1717,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "Suite No. 1 in F major (HWV 348)",
        "durationRange": [
          25,
          28
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "Suite No. 2 in D major (HWV 349)",
        "durationRange": [
          10,
          12
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "Suite No. 3 in G major (HWV 350)",
        "durationRange": [
          9,
          11
        ]
      }
    ],
    "totalDurationRange": [
      45,
      52
    ],
    "difficulty": "beginner",
    "difficultyReason": "泰晤士河皇家游船音乐，铜管嘹亮、舞步欢快，是户外巴洛克声学的最高杰作。",
    "whyListenNow": "领略圆号（自然号角）在管弦乐队中最早的大规模亮相同度轰鸣。",
    "prerequisiteKnowledge": "英王乔治一世乘皇家平底游船沿泰晤士河巡游，亨德尔率50人乐团紧随其后演奏，国王下令整夜重复演奏三次。",
    "listeningTaskFirst": "听F大调组曲中的《号角舞曲》（Hornpipe）：圆号爽朗的打猎三拍子跳跃。",
    "listeningTaskSecond": "听D大调组曲《阿拉·霍恩派普》（Alla Hornpipe）：小号与圆号一前一后交替破空呼应。",
    "auralEvents": [
      {
        "description": "第一组曲序曲庄严行进",
        "whatToNotice": "泰晤士河水波微漾中的皇家仪仗感。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:00-02:00",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "D大调号角进行曲全奏",
        "whatToNotice": "辉煌的小号高亢冲锋与圆号低音支撑。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "HWV 349-2",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "标志着亨德尔彻底奠定在英国王室与公众心中不可动摇的国宝音乐家崇高地位。",
    "isDeepGuide": true,
    "guideWordCount": 1400,
    "defaultRecordingId": "rec-handel-water-music-ref",
    "alternateRecordingIds": [
      "rec-handel-water-music-alt1",
      "rec-handel-water-music-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-handel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "haydn-symphony-104-london",
    "title": "D大调第104交响曲《伦敦》",
    "titleOriginal": "Symphony No. 104 in D major, Hob. I:104",
    "nickname": "伦敦交响曲",
    "composerId": "composer-haydn",
    "opusNumber": "Hob. I:104",
    "genre": "交响曲",
    "instrumentation": "双管制古典管弦乐队（含单簧管、定音鼓与铜管）",
    "compositionYear": 1795,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Adagio - Allegro",
        "durationRange": [
          8,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Andante",
        "durationRange": [
          7,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Menuetto: Allegro",
        "durationRange": [
          4,
          5
        ]
      },
      {
        "id": "mov-04",
        "number": 4,
        "title": "IV. Finale: Spiritoso",
        "durationRange": [
          5,
          6
        ]
      }
    ],
    "totalDurationRange": [
      25,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "“交响乐之父”海顿毕生104部交响曲登峰造极的终章绝笔，结构浑然天成。",
    "whyListenNow": "检验你对标准古典四乐章奏鸣套曲全部曲式规则（慢引子、展开部、小步舞曲三部曲式、民间回旋终曲）的终极理解。",
    "prerequisiteKnowledge": "海顿受小提琴家萨洛蒙邀请两度客居伦敦，在汉诺威广场音乐厅大获空前成功。",
    "listeningTaskFirst": "听第一乐章开篇极庄严的D小调全奏轰鸣引子，随后如何魔术般蜕变为阳光灿烂的D大调快板主部。",
    "listeningTaskSecond": "第四乐章开篇由克罗地亚民间风笛持续低音伴奏的伦敦街头卖唱调。",
    "auralEvents": [
      {
        "description": "第一乐章宏伟悲壮的慢速引子",
        "whatToNotice": "D小调全乐队震耳发聩的空白休止符张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:00-01:30",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "第四乐章风笛民间主题破晓",
        "whatToNotice": "圆号持续单音模拟风笛囊袋，上方提琴如欢笑起舞。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "IV Mov 开篇",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1795年首演为海顿带来巨大财富与荣誉，海顿在日记中写道：“全场狂喜，我平生最得意之夜。”",
    "isDeepGuide": true,
    "guideWordCount": 2300,
    "defaultRecordingId": "rec-haydn-symphony-104-london-ref",
    "alternateRecordingIds": [
      "rec-haydn-symphony-104-london-alt1",
      "rec-haydn-symphony-104-london-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-haydn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "haydn-string-quartet-emperor",
    "title": "C大调弦乐四重奏《皇帝》",
    "titleOriginal": "String Quartet in C major, Op. 76 No. 3",
    "nickname": "皇帝四重奏",
    "composerId": "composer-haydn",
    "opusNumber": "Op. 76 No. 3 / Hob. III:77",
    "genre": "弦乐四重奏",
    "instrumentation": "第一小提琴、第二小提琴、中提琴、大提琴",
    "compositionYear": 1797,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro",
        "durationRange": [
          5,
          6
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Poco adagio; cantabile (皇帝赞歌与变奏)",
        "durationRange": [
          7,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Menuetto: Allegro",
        "durationRange": [
          4,
          5
        ]
      },
      {
        "id": "mov-04",
        "number": 4,
        "title": "IV. Finale: Presto",
        "durationRange": [
          5,
          6
        ]
      }
    ],
    "totalDurationRange": [
      22,
      25
    ],
    "difficulty": "intermediate",
    "difficultyReason": "第二乐章包含海顿为奥地利皇帝创作的颂歌（即当今德国国歌旋律），四件乐器轮流演奏变奏。",
    "whyListenNow": "观察“变奏曲式”最高境界：核心主题旋律完全不加改变，纯靠另外三件乐器在周围织出繁花似锦的对位藤蔓。",
    "prerequisiteKnowledge": "面对拿破仑大军压境，海顿创作《上帝保佑吾皇弗朗茨》以凝聚奥地利民族人心。",
    "listeningTaskFirst": "追踪第二乐章四次变奏中主旋律的交接棒：第一小提琴 -> 第二小提琴 -> 大提琴低音歌唱 -> 中提琴与高音织体。",
    "listeningTaskSecond": "听第四乐章从阴郁暴烈的C小调突围，最终在明媚辉煌的C大调大团圆收官。",
    "auralEvents": [
      {
        "description": "第二乐章《皇帝赞歌》纯净呈示",
        "whatToNotice": "庄严如圣咏的四部和声，无瑕优雅。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "II Mov 00:00-01:20",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "大提琴主奏第二变奏",
        "whatToNotice": "深沉大提琴在底部歌唱国歌，高音小提琴如清泉波光跳跃。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "II Mov 02:40-04:00",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1809年维也纳遭法军炮轰期间，垂暮病危的海顿每天仍挣扎爬到钢琴前弹奏这首颂歌。",
    "isDeepGuide": true,
    "guideWordCount": 2280,
    "defaultRecordingId": "rec-haydn-string-quartet-emperor-ref",
    "alternateRecordingIds": [
      "rec-haydn-string-quartet-emperor-alt1",
      "rec-haydn-string-quartet-emperor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-haydn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-piano-concerto-20",
    "title": "D小调第二十钢琴协奏曲",
    "titleOriginal": "Piano Concerto No. 20 in D minor, K. 466",
    "composerId": "composer-mozart",
    "opusNumber": "K. 466",
    "genre": "钢琴协奏曲",
    "instrumentation": "独奏钢琴、长笛、双簧管2、大管2、圆号2、小号2、定音鼓与弦乐组",
    "compositionYear": 1785,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro",
        "durationRange": [
          13,
          15
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Romanze",
        "durationRange": [
          8,
          10
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Rondo, Allegro assai",
        "durationRange": [
          7,
          8
        ]
      }
    ],
    "totalDurationRange": [
      30,
      33
    ],
    "difficulty": "advanced",
    "difficultyReason": "莫扎特罕见的激进小调大作，预示了贝多芬式的暴风雨搏斗与《唐璜》地狱火焰。",
    "whyListenNow": "贝多芬终身对本部协奏曲推崇备至，并亲自为其第一乐章谱写了震撼人心的专属华彩乐段（Cadenza）。",
    "prerequisiteKnowledge": "莫扎特唯二的两部小调钢琴协奏曲之一（另一部为K.491）。",
    "listeningTaskFirst": "听第一乐章开篇低音弦乐切分低语与微弱颤音，如同地心熔岩在暗夜涌动。",
    "listeningTaskSecond": "听第二乐章极度温柔纯净的降B大调浪漫曲中段，如何突然爆发狂暴狂乱的G小调暴风雨打碎梦境。",
    "auralEvents": [
      {
        "description": "乐队引子切分暗流涌动",
        "whatToNotice": "D小调神经质的紧张与压抑叹息。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:00-01:45",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "独奏钢琴孤寂叹息进入",
        "whatToNotice": "钢琴吐出的第一句不是主题，而是一声哀伤的独白。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "01:50-02:40",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "第一乐章贝多芬版大华彩",
        "whatToNotice": "雷霆万钧的八度狂飙与戏剧性爆发。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "11:00-13:30",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1785年维也纳首演前数小时莫扎特还在抄写末乐章乐谱，乐团未及完整排练直接上台大获全胜。",
    "isDeepGuide": true,
    "guideWordCount": 2500,
    "defaultRecordingId": "rec-mozart-piano-concerto-20-ref",
    "alternateRecordingIds": [
      "rec-mozart-piano-concerto-20-alt1",
      "rec-mozart-piano-concerto-20-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-symphony-41-jupiter",
    "title": "C大调第四十一交响曲《朱庇特》",
    "titleOriginal": "Symphony No. 41 in C major, K. 551",
    "nickname": "朱庇特交响曲",
    "composerId": "composer-mozart",
    "opusNumber": "K. 551",
    "genre": "交响曲",
    "instrumentation": "古典大管弦乐队（长笛、双簧管2、大管2、圆号2、小号2、定音鼓与弦乐组）",
    "compositionYear": 1788,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro vivace",
        "durationRange": [
          11,
          12
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Andante cantabile",
        "durationRange": [
          8,
          9
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Menuetto: Allegretto",
        "durationRange": [
          4,
          5
        ]
      },
      {
        "id": "mov-04",
        "number": 4,
        "title": "IV. Molto allegro (五声部大赋格终曲)",
        "durationRange": [
          8,
          10
        ]
      }
    ],
    "totalDurationRange": [
      32,
      36
    ],
    "difficulty": "advanced",
    "difficultyReason": "莫扎特交响创作巅峰王冠，第四乐章将奏鸣曲式与五个独立主题的五声部大赋格融为一体，人类智力神迹。",
    "whyListenNow": "领略18世纪古典对位与交响戏剧性最难以逾越的最高珠穆朗玛峰。",
    "prerequisiteKnowledge": "1788年夏天莫扎特在短短六周内不可思议地连续写出第39、40、41三部伟大交响曲，生前甚至未能听到首演。",
    "listeningTaskFirst": "听终乐章开篇由四根全音符（Do-Re-Fa-Mi）构成的古老纯朴圣咏密码。",
    "listeningTaskSecond": "高潮展开部与尾声处：追踪五条截然不同的旋律如何在同一瞬间同时轰鸣狂飙！",
    "auralEvents": [
      {
        "description": "第一乐章开篇朱庇特雷神号角齐奏",
        "whatToNotice": "C大调三和弦轰鸣与随后小提琴柔声回答。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "I Mov 00:00-00:30",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "第四乐章五声部双重赋格大融合",
        "whatToNotice": "对位复杂至极却听感水银泻地、欢畅淋漓。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "IV Mov 06:00-08:30",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "英国演出策划人萨洛蒙因其宏大壮丽赋予其罗马众神之王“朱庇特”的无上封号。",
    "isDeepGuide": true,
    "guideWordCount": 2650,
    "defaultRecordingId": "rec-mozart-symphony-41-jupiter-ref",
    "alternateRecordingIds": [
      "rec-mozart-symphony-41-jupiter-alt1",
      "rec-mozart-symphony-41-jupiter-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-symphony-3-eroica",
    "title": "降E大调第三交响曲《英雄》",
    "titleOriginal": "Symphony No. 3 in E-flat major, Op. 55",
    "nickname": "英雄交响曲",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 55",
    "genre": "交响曲",
    "instrumentation": "管弦乐队（含三支圆号，开创交响史先例）",
    "compositionYear": 1804,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro con brio",
        "durationRange": [
          15,
          18
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Marcia funebre: Adagio assai (葬礼进行曲)",
        "durationRange": [
          14,
          17
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Scherzo: Allegro vivace",
        "durationRange": [
          5,
          6
        ]
      },
      {
        "id": "mov-04",
        "number": 4,
        "title": "IV. Finale: Allegro molto (普罗米修斯变奏)",
        "durationRange": [
          11,
          13
        ]
      }
    ],
    "totalDurationRange": [
      48,
      54
    ],
    "difficulty": "advanced",
    "difficultyReason": "全长近50分钟彻底打破古典匀称规训，正式宣告浪漫主义人类英雄精神撕裂时代的降临。",
    "whyListenNow": "第一乐章开篇两声平地惊雷般的降E大调全奏，是西方音乐史彻底走向现代的第一声炮火。",
    "prerequisiteKnowledge": "原本题献给拿破仑，获悉拿破仑加冕称帝后贝多芬愤怒撕碎总谱扉页痛骂：“他也只是个凡夫俗子！”",
    "listeningTaskFirst": "听第一乐章开篇两记巨响后，大提琴主题落在不协调的升C音上，破坏调性稳定。",
    "listeningTaskSecond": "听第二乐章葬礼进行曲中段双簧管纯净歌唱与随后的宏大双重赋格狂潮。",
    "auralEvents": [
      {
        "description": "开天辟地的两记全奏重拳",
        "whatToNotice": "不加任何引子直截了当的冲撞。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:00-00:05",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "展开部惊天动地的反拍不协和切分撞击",
        "whatToNotice": "全乐队仿佛在雷鸣中粉碎解体。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "07:30-08:45",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "再现部前圆号“提前抢拍”进入的著名悬念",
        "whatToNotice": "小提琴轻声震音中小号如晨光微破。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "09:40-10:15",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1804年贝多芬在海利根施塔特克服自杀危机后写下的涅槃重生之作，人类交响史永恒里程碑。",
    "isDeepGuide": true,
    "guideWordCount": 2800,
    "defaultRecordingId": "rec-beethoven-symphony-3-eroica-ref",
    "alternateRecordingIds": [
      "rec-beethoven-symphony-3-eroica-alt1",
      "rec-beethoven-symphony-3-eroica-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-symphony-6-pastoral",
    "title": "F大调第六交响曲《田园》",
    "titleOriginal": "Symphony No. 6 in F major, Op. 68",
    "nickname": "田园交响曲",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 68",
    "genre": "交响曲 / 标题交响曲",
    "instrumentation": "管弦乐队（含短笛、长号、定音鼓）",
    "compositionYear": 1808,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 初到乡村时的愉快感受 (Allegro ma non troppo)",
        "durationRange": [
          9,
          11
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 溪畔小景 (Andante molto mosso)",
        "durationRange": [
          11,
          13
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 乡民欢乐聚会 (Allegro)",
        "durationRange": [
          5,
          6
        ]
      },
      {
        "id": "mov-04",
        "number": 4,
        "title": "IV. 暴风雨 (Allegro)",
        "durationRange": [
          3.5,
          4.5
        ]
      },
      {
        "id": "mov-05",
        "number": 5,
        "title": "V. 牧人之歌：暴风雨过后的感恩与喜悦 (Allegretto)",
        "durationRange": [
          9,
          10
        ]
      }
    ],
    "totalDurationRange": [
      40,
      45
    ],
    "difficulty": "beginner",
    "difficultyReason": "五乐章标题结构，鸟鸣、小溪流淌、农夫跺脚起舞与雷暴雨声画合一，极易感知。",
    "whyListenNow": "贝多芬亲笔告诫：“情感的抒发多于绘画的描摹”——体会如何用音乐写诗而非机械模仿声音。",
    "prerequisiteKnowledge": "第二乐章末尾贝多芬在总谱上注明：夜莺（长笛）、鹌鹑（双簧管）、布谷鸟（双单簧管）。",
    "listeningTaskFirst": "听第二乐章结尾三种林鸟的拟声独奏。",
    "listeningTaskSecond": "听第四乐章暴风雨突然打断舞会：低音大提琴狂暴滚奏、短笛闪电呼啸与长号轰鸣。",
    "auralEvents": [
      {
        "description": "第一乐章开篇田园清风吹拂",
        "whatToNotice": "F大调空五度持续和声与悠闲自在的深呼吸。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "I Mov 00:00-00:45",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "第二乐章林鸟啼鸣独奏群",
        "whatToNotice": "长笛、双簧管与单簧管生动清脆的鸟鸣对答。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "II Mov 尾声",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "第四乐章暴风雨雷暴破空",
        "whatToNotice": "定音鼓滚奏如闷雷，短笛如闪电劈开树林。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "IV Mov 全乐章",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1808年12月22日维也纳剧院传奇马拉松音乐会上，与第五《命运》交响曲同场首演。",
    "isDeepGuide": true,
    "guideWordCount": 2400,
    "defaultRecordingId": "rec-beethoven-symphony-6-pastoral-ref",
    "alternateRecordingIds": [
      "rec-beethoven-symphony-6-pastoral-alt1",
      "rec-beethoven-symphony-6-pastoral-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-piano-concerto-5-emperor",
    "title": "降E大调第五钢琴协奏曲《皇帝》",
    "titleOriginal": "Piano Concerto No. 5 in E-flat major, Op. 73",
    "nickname": "皇帝协奏曲",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 73",
    "genre": "钢琴协奏曲",
    "instrumentation": "独奏钢琴、管弦乐队",
    "compositionYear": 1809,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro",
        "durationRange": [
          19,
          21
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio un poco mosso",
        "durationRange": [
          7,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Rondo: Allegro ma non troppo",
        "durationRange": [
          10,
          11
        ]
      }
    ],
    "totalDurationRange": [
      38,
      42
    ],
    "difficulty": "intermediate",
    "difficultyReason": "协奏曲之皇，第一乐章彻底打破先乐队后钢琴的规矩，全奏和弦开场即由钢琴展开三波辉煌琶音巨浪。",
    "whyListenNow": "领略现代大三角钢琴在交响乐队前傲视群雄的帝王气魄。",
    "prerequisiteKnowledge": "创作于拿破仑军队围攻炮击维也纳期间，贝多芬用枕头捂住耳朵保护仅存残余听力。",
    "listeningTaskFirst": "听第一乐章开局三声交响巨响，钢琴三次掀起飞流直下的金色和声瀑布。",
    "listeningTaskSecond": "听第二乐章慢板梦幻安宁向第三乐章回旋曲不间断（Attacca）跃入：钢琴先在极弱中摸索出节奏动机，随后猛烈暴起破门而入。",
    "auralEvents": [
      {
        "description": "开篇三度钢琴大瀑布华彩",
        "whatToNotice": "降E大调、降A大调、降B大调三度和弦连续倾泻。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "00:00-01:30",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "第二乐章天国赞美诗圣咏",
        "whatToNotice": "弱音器弦乐衬托下钢琴如雨滴落在丝绸上。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "II Mov",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "慢板无缝转入终乐章突袭",
        "whatToNotice": "暗夜摸索到阳光爆发的戏剧性断层跃升。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "II转III交接",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "因贝多芬当时几乎全聋无法亲自登台弹奏，由弟子车尔尼担任钢琴独奏在维也纳首演。",
    "isDeepGuide": true,
    "guideWordCount": 2550,
    "defaultRecordingId": "rec-beethoven-piano-concerto-5-emperor-ref",
    "alternateRecordingIds": [
      "rec-beethoven-piano-concerto-5-emperor-alt1",
      "rec-beethoven-piano-concerto-5-emperor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-piano-sonata-14-moonlight",
    "title": "升C小调第十四钢琴奏鸣曲《月光》",
    "titleOriginal": "Piano Sonata No. 14 in C-sharp minor, Op. 27 No. 2",
    "nickname": "月光奏鸣曲",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 27 No. 2",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "独奏钢琴",
    "compositionYear": 1801,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Adagio sostenuto (宛如幻想曲)",
        "durationRange": [
          5,
          6
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Allegretto (幽默花朵)",
        "durationRange": [
          2,
          2.5
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Presto agitato (暴风骤雨急板)",
        "durationRange": [
          7,
          8
        ]
      }
    ],
    "totalDurationRange": [
      15,
      17
    ],
    "difficulty": "intermediate",
    "difficultyReason": "颠覆传统奏鸣曲先快后慢的结构，第一乐章为催眠沉静的三连音湖水，终乐章则是狂暴海啸。",
    "whyListenNow": "破除“月光只是谈恋爱”的庸俗迷思，体会贝多芬在耳聋威胁下内心绝望与狂暴抗争的两极撕裂。",
    "prerequisiteKnowledge": "“月光”并非贝多芬所起，乃乐评人莱尔施塔勃形容其第一乐章如“琉森湖月光波影”而后世附会。",
    "listeningTaskFirst": "听第一乐章全程连绵不断的三连音分解和弦，右手小指深情唱出幽咽单音。",
    "listeningTaskSecond": "听第三乐章暴风雨：琶音从低音区如机关枪般向上撕裂喷射，重音在强拍猛击。",
    "auralEvents": [
      {
        "description": "第一乐章冥想三连音湖波",
        "whatToNotice": "升C小调空灵纯净与持续延音踏板的谐波交融。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "I Mov 全曲",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "第二乐章降D大调解脱微笑",
        "whatToNotice": "李斯特誉为“两座深渊之间的一朵娇艳小花”。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "II Mov",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "第三乐章愤怒咆哮狂飙",
        "whatToNotice": "双手狂暴翻滚与两个尖锐突强sfz和弦重击。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "III Mov 开篇",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "题献给贝多芬热恋但因阶级悬殊无法结合的贵族少女琪丽叶塔·圭恰迪尼女伯爵。",
    "isDeepGuide": true,
    "guideWordCount": 2320,
    "defaultRecordingId": "rec-beethoven-piano-sonata-14-moonlight-ref",
    "alternateRecordingIds": [
      "rec-beethoven-piano-sonata-14-moonlight-alt1",
      "rec-beethoven-piano-sonata-14-moonlight-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bach-st-matthew-passion",
    "title": "《马太受难曲》",
    "titleOriginal": "St Matthew Passion, BWV 244",
    "composerId": "composer-bach",
    "opusNumber": "BWV 244",
    "genre": "受难曲 / 声乐清唱大作",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1727,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1727年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bach-st-matthew-passion-master",
    "alternateRecordingIds": [
      "rec-bach-st-matthew-passion-alt1",
      "rec-bach-st-matthew-passion-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bach-french-suite-5",
    "title": "G大调第五法国组曲",
    "titleOriginal": "French Suite No. 5 in G major, BWV 816",
    "composerId": "composer-bach",
    "opusNumber": "BWV 816",
    "genre": "键盘组曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1722,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1722年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bach-french-suite-5-master",
    "alternateRecordingIds": [
      "rec-bach-french-suite-5-alt1",
      "rec-bach-french-suite-5-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bach-magnificat",
    "title": "D大调圣母赞歌",
    "titleOriginal": "Magnificat in D major, BWV 243",
    "composerId": "composer-bach",
    "opusNumber": "BWV 243",
    "genre": "宗教声乐合唱",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1733,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1733年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bach-magnificat-master",
    "alternateRecordingIds": [
      "rec-bach-magnificat-alt1",
      "rec-bach-magnificat-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bach-violin-concerto-e",
    "title": "E大调第二小提琴协奏曲",
    "titleOriginal": "Violin Concerto in E major, BWV 1042",
    "composerId": "composer-bach",
    "opusNumber": "BWV 1042",
    "genre": "独奏小提琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1720,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1720年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bach-violin-concerto-e-master",
    "alternateRecordingIds": [
      "rec-bach-violin-concerto-e-alt1",
      "rec-bach-violin-concerto-e-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bach-double-violin-concerto",
    "title": "D小调双小提琴协奏曲",
    "titleOriginal": "Concerto for Two Violins in D minor, BWV 1043",
    "composerId": "composer-bach",
    "opusNumber": "BWV 1043",
    "genre": "双小提琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1730,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1730年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bach-double-violin-concerto-master",
    "alternateRecordingIds": [
      "rec-bach-double-violin-concerto-alt1",
      "rec-bach-double-violin-concerto-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bach-flute-sonata-b-minor",
    "title": "B小调长笛奏鸣曲",
    "titleOriginal": "Flute Sonata in B minor, BWV 1030",
    "composerId": "composer-bach",
    "opusNumber": "BWV 1030",
    "genre": "室内乐奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1736,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1736年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bach-flute-sonata-b-minor-master",
    "alternateRecordingIds": [
      "rec-bach-flute-sonata-b-minor-alt1",
      "rec-bach-flute-sonata-b-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bach-orchestral-suite-2",
    "title": "B小调第二管弦乐组曲（含《谐谑曲》）",
    "titleOriginal": "Orchestral Suite No. 2 in B minor, BWV 1067",
    "composerId": "composer-bach",
    "opusNumber": "BWV 1067",
    "genre": "管弦乐组曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1738,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1738年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bach-orchestral-suite-2-master",
    "alternateRecordingIds": [
      "rec-bach-orchestral-suite-2-alt1",
      "rec-bach-orchestral-suite-2-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bach",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "vivaldi-four-seasons-summer",
    "title": "G小调第二小提琴协奏曲《夏》",
    "titleOriginal": "L'Estate, RV 315",
    "composerId": "composer-vivaldi",
    "opusNumber": "RV 315",
    "genre": "独奏协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1723,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1723年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-vivaldi-four-seasons-summer-master",
    "alternateRecordingIds": [
      "rec-vivaldi-four-seasons-summer-alt1",
      "rec-vivaldi-four-seasons-summer-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-vivaldi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "vivaldi-four-seasons-autumn",
    "title": "F大调第三小提琴协奏曲《秋》",
    "titleOriginal": "L'Autunno, RV 293",
    "composerId": "composer-vivaldi",
    "opusNumber": "RV 293",
    "genre": "独奏协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1723,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1723年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-vivaldi-four-seasons-autumn-master",
    "alternateRecordingIds": [
      "rec-vivaldi-four-seasons-autumn-alt1",
      "rec-vivaldi-four-seasons-autumn-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-vivaldi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "vivaldi-four-seasons-winter-full",
    "title": "F小调第四小提琴协奏曲《冬》",
    "titleOriginal": "L'Inverno, RV 297",
    "composerId": "composer-vivaldi",
    "opusNumber": "RV 297",
    "genre": "独奏协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1723,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1723年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-vivaldi-four-seasons-winter-full-master",
    "alternateRecordingIds": [
      "rec-vivaldi-four-seasons-winter-full-alt1",
      "rec-vivaldi-four-seasons-winter-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-vivaldi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "vivaldi-gloria-rv589",
    "title": "D大调《光荣经》",
    "titleOriginal": "Gloria in D major, RV 589",
    "composerId": "composer-vivaldi",
    "opusNumber": "RV 589",
    "genre": "宗教合唱交响",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1715,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1715年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-vivaldi-gloria-rv589-master",
    "alternateRecordingIds": [
      "rec-vivaldi-gloria-rv589-alt1",
      "rec-vivaldi-gloria-rv589-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-vivaldi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "vivaldi-l-estro-armonico-op3-8",
    "title": "A小调双小提琴协奏曲",
    "titleOriginal": "Concerto for Two Violins in A minor, Op. 3 No. 8",
    "composerId": "composer-vivaldi",
    "opusNumber": "Op. 3 No. 8",
    "genre": "大协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1711,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1711年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-vivaldi-l-estro-armonico-op3-8-master",
    "alternateRecordingIds": [
      "rec-vivaldi-l-estro-armonico-op3-8-alt1",
      "rec-vivaldi-l-estro-armonico-op3-8-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-vivaldi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "handel-royal-fireworks",
    "title": "《皇家焰火音乐》",
    "titleOriginal": "Music for the Royal Fireworks, HWV 351",
    "composerId": "composer-handel",
    "opusNumber": "HWV 351",
    "genre": "露天庆典管弦乐",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1749,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1749年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-handel-royal-fireworks-master",
    "alternateRecordingIds": [
      "rec-handel-royal-fireworks-alt1",
      "rec-handel-royal-fireworks-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-handel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "handel-zadok-the-priest",
    "title": "《祭司扎多克》（加冕赞歌）",
    "titleOriginal": "Zadok the Priest, HWV 258",
    "composerId": "composer-handel",
    "opusNumber": "HWV 258",
    "genre": "加冕赞美诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1727,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1727年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-handel-zadok-the-priest-master",
    "alternateRecordingIds": [
      "rec-handel-zadok-the-priest-alt1",
      "rec-handel-zadok-the-priest-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-handel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "handel-harp-concerto-op4-6",
    "title": "降B大调竖琴协奏曲",
    "titleOriginal": "Harp Concerto in B-flat major, Op. 4 No. 6",
    "composerId": "composer-handel",
    "opusNumber": "Op. 4 No. 6",
    "genre": "独奏协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1736,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1736年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-handel-harp-concerto-op4-6-master",
    "alternateRecordingIds": [
      "rec-handel-harp-concerto-op4-6-alt1",
      "rec-handel-harp-concerto-op4-6-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-handel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "handel-rinaldo-lascia-chio-pianga",
    "title": "歌剧《里纳尔多》·让我痛哭吧",
    "titleOriginal": "Lascia ch'io pianga from Rinaldo",
    "composerId": "composer-handel",
    "opusNumber": "HWV 7a",
    "genre": "歌剧咏叹调",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1711,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1711年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-handel-rinaldo-lascia-chio-pianga-master",
    "alternateRecordingIds": [
      "rec-handel-rinaldo-lascia-chio-pianga-alt1",
      "rec-handel-rinaldo-lascia-chio-pianga-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-handel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "haydn-symphony-45-farewell",
    "title": "升F小调第45交响曲《告别》",
    "titleOriginal": "Symphony No. 45 in F-sharp minor, \"Farewell\"",
    "composerId": "composer-haydn",
    "opusNumber": "Hob. I:45",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1772,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1772年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-haydn-symphony-45-farewell-master",
    "alternateRecordingIds": [
      "rec-haydn-symphony-45-farewell-alt1",
      "rec-haydn-symphony-45-farewell-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-haydn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "haydn-symphony-88",
    "title": "G大调第88交响曲",
    "titleOriginal": "Symphony No. 88 in G major",
    "composerId": "composer-haydn",
    "opusNumber": "Hob. I:88",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1787,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1787年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-haydn-symphony-88-master",
    "alternateRecordingIds": [
      "rec-haydn-symphony-88-alt1",
      "rec-haydn-symphony-88-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-haydn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "haydn-symphony-101-clock",
    "title": "D大调第101交响曲《时钟》",
    "titleOriginal": "Symphony No. 101 in D major, \"The Clock\"",
    "composerId": "composer-haydn",
    "opusNumber": "Hob. I:101",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1794,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1794年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-haydn-symphony-101-clock-master",
    "alternateRecordingIds": [
      "rec-haydn-symphony-101-clock-alt1",
      "rec-haydn-symphony-101-clock-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-haydn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "haydn-symphony-103-drumroll",
    "title": "降E大调第103交响曲《鼓声》",
    "titleOriginal": "Symphony No. 103, \"Drumroll\"",
    "composerId": "composer-haydn",
    "opusNumber": "Hob. I:103",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1795,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1795年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-haydn-symphony-103-drumroll-master",
    "alternateRecordingIds": [
      "rec-haydn-symphony-103-drumroll-alt1",
      "rec-haydn-symphony-103-drumroll-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-haydn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "haydn-trumpet-concerto",
    "title": "降E大调小号协奏曲",
    "titleOriginal": "Trumpet Concerto in E-flat major",
    "composerId": "composer-haydn",
    "opusNumber": "Hob. VIIe:1",
    "genre": "协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1796,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1796年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-haydn-trumpet-concerto-master",
    "alternateRecordingIds": [
      "rec-haydn-trumpet-concerto-alt1",
      "rec-haydn-trumpet-concerto-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-haydn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "haydn-cello-concerto-1-c",
    "title": "C大调第一大提琴协奏曲",
    "titleOriginal": "Cello Concerto No. 1 in C major",
    "composerId": "composer-haydn",
    "opusNumber": "Hob. VIIb:1",
    "genre": "协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1765,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1765年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-haydn-cello-concerto-1-c-master",
    "alternateRecordingIds": [
      "rec-haydn-cello-concerto-1-c-alt1",
      "rec-haydn-cello-concerto-1-c-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-haydn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "haydn-cello-concerto-2-d",
    "title": "D大调第二大提琴协奏曲",
    "titleOriginal": "Cello Concerto No. 2 in D major",
    "composerId": "composer-haydn",
    "opusNumber": "Hob. VIIb:2",
    "genre": "协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1783,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1783年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-haydn-cello-concerto-2-d-master",
    "alternateRecordingIds": [
      "rec-haydn-cello-concerto-2-d-alt1",
      "rec-haydn-cello-concerto-2-d-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-haydn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "haydn-the-creation",
    "title": "清唱剧《创世纪》",
    "titleOriginal": "The Creation (Die Schöpfung)",
    "composerId": "composer-haydn",
    "opusNumber": "Hob. XXI:2",
    "genre": "清唱剧",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1798,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1798年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-haydn-the-creation-master",
    "alternateRecordingIds": [
      "rec-haydn-the-creation-alt1",
      "rec-haydn-the-creation-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-haydn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-symphony-35-haffner",
    "title": "D大调第35交响曲《哈夫纳》",
    "titleOriginal": "Symphony No. 35 in D major, K. 385",
    "composerId": "composer-mozart",
    "opusNumber": "K. 385",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1782,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1782年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-symphony-35-haffner-master",
    "alternateRecordingIds": [
      "rec-mozart-symphony-35-haffner-alt1",
      "rec-mozart-symphony-35-haffner-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-symphony-36-linz",
    "title": "C大调第36交响曲《林茨》",
    "titleOriginal": "Symphony No. 36 in C major, K. 425",
    "composerId": "composer-mozart",
    "opusNumber": "K. 425",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1783,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1783年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-symphony-36-linz-master",
    "alternateRecordingIds": [
      "rec-mozart-symphony-36-linz-alt1",
      "rec-mozart-symphony-36-linz-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-symphony-38-prague",
    "title": "D大调第38交响曲《布拉格》",
    "titleOriginal": "Symphony No. 38 in D major, K. 504",
    "composerId": "composer-mozart",
    "opusNumber": "K. 504",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1786,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1786年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-symphony-38-prague-master",
    "alternateRecordingIds": [
      "rec-mozart-symphony-38-prague-alt1",
      "rec-mozart-symphony-38-prague-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-symphony-39-e-flat",
    "title": "降E大调第39交响曲",
    "titleOriginal": "Symphony No. 39 in E-flat major, K. 543",
    "composerId": "composer-mozart",
    "opusNumber": "K. 543",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1788,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1788年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-symphony-39-e-flat-master",
    "alternateRecordingIds": [
      "rec-mozart-symphony-39-e-flat-alt1",
      "rec-mozart-symphony-39-e-flat-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-piano-concerto-23-a",
    "title": "A大调第二十三钢琴协奏曲",
    "titleOriginal": "Piano Concerto No. 23 in A major, K. 488",
    "composerId": "composer-mozart",
    "opusNumber": "K. 488",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1786,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1786年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-piano-concerto-23-a-master",
    "alternateRecordingIds": [
      "rec-mozart-piano-concerto-23-a-alt1",
      "rec-mozart-piano-concerto-23-a-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-piano-concerto-24-c-minor",
    "title": "C小调第二十四钢琴协奏曲",
    "titleOriginal": "Piano Concerto No. 24 in C minor, K. 491",
    "composerId": "composer-mozart",
    "opusNumber": "K. 491",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1786,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1786年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-piano-concerto-24-c-minor-master",
    "alternateRecordingIds": [
      "rec-mozart-piano-concerto-24-c-minor-alt1",
      "rec-mozart-piano-concerto-24-c-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-piano-concerto-27-b-flat",
    "title": "降B大调第二十七钢琴协奏曲",
    "titleOriginal": "Piano Concerto No. 27 in B-flat major, K. 595",
    "composerId": "composer-mozart",
    "opusNumber": "K. 595",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1791,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1791年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-piano-concerto-27-b-flat-master",
    "alternateRecordingIds": [
      "rec-mozart-piano-concerto-27-b-flat-alt1",
      "rec-mozart-piano-concerto-27-b-flat-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-violin-concerto-3-g",
    "title": "G大调第三小提琴协奏曲",
    "titleOriginal": "Violin Concerto No. 3 in G major, K. 216",
    "composerId": "composer-mozart",
    "opusNumber": "K. 216",
    "genre": "小提琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1775,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1775年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-violin-concerto-3-g-master",
    "alternateRecordingIds": [
      "rec-mozart-violin-concerto-3-g-alt1",
      "rec-mozart-violin-concerto-3-g-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-violin-concerto-5-turkish",
    "title": "A大调第五小提琴协奏曲《土耳其》",
    "titleOriginal": "Violin Concerto No. 5 in A major, K. 219",
    "composerId": "composer-mozart",
    "opusNumber": "K. 219",
    "genre": "小提琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1775,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1775年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-violin-concerto-5-turkish-master",
    "alternateRecordingIds": [
      "rec-mozart-violin-concerto-5-turkish-alt1",
      "rec-mozart-violin-concerto-5-turkish-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-sinfonia-concertante-k364",
    "title": "降E大调交响协奏曲（小提琴与中提琴）",
    "titleOriginal": "Sinfonia Concertante in E-flat major, K. 364",
    "composerId": "composer-mozart",
    "opusNumber": "K. 364",
    "genre": "交响协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1779,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1779年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-sinfonia-concertante-k364-master",
    "alternateRecordingIds": [
      "rec-mozart-sinfonia-concertante-k364-alt1",
      "rec-mozart-sinfonia-concertante-k364-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-clarinet-quintet-k581",
    "title": "A大调单簧管五重奏",
    "titleOriginal": "Clarinet Quintet in A major, K. 581",
    "composerId": "composer-mozart",
    "opusNumber": "K. 581",
    "genre": "室内乐五重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1789,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1789年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": true,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-clarinet-quintet-k581-master",
    "alternateRecordingIds": [
      "rec-mozart-clarinet-quintet-k581-alt1",
      "rec-mozart-clarinet-quintet-k581-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-flute-harp-concerto",
    "title": "C大调长笛与竖琴协奏曲",
    "titleOriginal": "Concerto for Flute, Harp, and Orchestra, K. 299",
    "composerId": "composer-mozart",
    "opusNumber": "K. 299",
    "genre": "双独奏协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1778,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1778年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-flute-harp-concerto-master",
    "alternateRecordingIds": [
      "rec-mozart-flute-harp-concerto-alt1",
      "rec-mozart-flute-harp-concerto-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-piano-sonata-11-turkish",
    "title": "A大调第十一钢琴奏鸣曲（含《土耳其进行曲》）",
    "titleOriginal": "Piano Sonata No. 11 in A major, K. 331",
    "composerId": "composer-mozart",
    "opusNumber": "K. 331",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1783,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1783年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-piano-sonata-11-turkish-master",
    "alternateRecordingIds": [
      "rec-mozart-piano-sonata-11-turkish-alt1",
      "rec-mozart-piano-sonata-11-turkish-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-piano-sonata-16-facile",
    "title": "C大调第十六钢琴奏鸣曲《单纯》",
    "titleOriginal": "Piano Sonata No. 16 in C major, K. 545",
    "composerId": "composer-mozart",
    "opusNumber": "K. 545",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1788,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1788年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-piano-sonata-16-facile-master",
    "alternateRecordingIds": [
      "rec-mozart-piano-sonata-16-facile-alt1",
      "rec-mozart-piano-sonata-16-facile-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-requiem-d-minor",
    "title": "D小调安魂曲（未完成绝笔）",
    "titleOriginal": "Requiem in D minor, K. 626",
    "composerId": "composer-mozart",
    "opusNumber": "K. 626",
    "genre": "安魂曲 / 悼亡弥撒",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1791,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1791年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-requiem-d-minor-master",
    "alternateRecordingIds": [
      "rec-mozart-requiem-d-minor-alt1",
      "rec-mozart-requiem-d-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-le-nozze-di-figaro-overture",
    "title": "歌剧《费加罗的婚礼》序曲",
    "titleOriginal": "Overture to Le nozze di Figaro, K. 492",
    "composerId": "composer-mozart",
    "opusNumber": "K. 492",
    "genre": "歌剧序曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1786,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1786年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-le-nozze-di-figaro-overture-master",
    "alternateRecordingIds": [
      "rec-mozart-le-nozze-di-figaro-overture-alt1",
      "rec-mozart-le-nozze-di-figaro-overture-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-don-giovanni-overture",
    "title": "歌剧《唐璜》序曲",
    "titleOriginal": "Overture to Don Giovanni, K. 527",
    "composerId": "composer-mozart",
    "opusNumber": "K. 527",
    "genre": "歌剧序曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1787,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1787年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-don-giovanni-overture-master",
    "alternateRecordingIds": [
      "rec-mozart-don-giovanni-overture-alt1",
      "rec-mozart-don-giovanni-overture-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mozart-die-zauberflote-overture",
    "title": "歌剧《魔笛》序曲",
    "titleOriginal": "Overture to Die Zauberflöte, K. 620",
    "composerId": "composer-mozart",
    "opusNumber": "K. 620",
    "genre": "歌剧序曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1791,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1791年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mozart-die-zauberflote-overture-master",
    "alternateRecordingIds": [
      "rec-mozart-die-zauberflote-overture-alt1",
      "rec-mozart-die-zauberflote-overture-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-symphony-1-c",
    "title": "C大调第一交响曲",
    "titleOriginal": "Symphony No. 1 in C major, Op. 21",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 21",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1800,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1800年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-symphony-1-c-master",
    "alternateRecordingIds": [
      "rec-beethoven-symphony-1-c-alt1",
      "rec-beethoven-symphony-1-c-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-symphony-2-d",
    "title": "D大调第二交响曲",
    "titleOriginal": "Symphony No. 2 in D major, Op. 36",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 36",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1802,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1802年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-symphony-2-d-master",
    "alternateRecordingIds": [
      "rec-beethoven-symphony-2-d-alt1",
      "rec-beethoven-symphony-2-d-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-symphony-4-b-flat",
    "title": "降B大调第四交响曲",
    "titleOriginal": "Symphony No. 4 in B-flat major, Op. 60",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 60",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1806,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1806年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-symphony-4-b-flat-master",
    "alternateRecordingIds": [
      "rec-beethoven-symphony-4-b-flat-alt1",
      "rec-beethoven-symphony-4-b-flat-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-symphony-7-a",
    "title": "A大调第七交响曲（舞蹈的颂赞）",
    "titleOriginal": "Symphony No. 7 in A major, Op. 92",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 92",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1812,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1812年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-symphony-7-a-master",
    "alternateRecordingIds": [
      "rec-beethoven-symphony-7-a-alt1",
      "rec-beethoven-symphony-7-a-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-symphony-8-f",
    "title": "F大调第八交响曲",
    "titleOriginal": "Symphony No. 8 in F major, Op. 93",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 93",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1812,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1812年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-symphony-8-f-master",
    "alternateRecordingIds": [
      "rec-beethoven-symphony-8-f-alt1",
      "rec-beethoven-symphony-8-f-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-piano-concerto-3-c-minor",
    "title": "C小调第三钢琴协奏曲",
    "titleOriginal": "Piano Concerto No. 3 in C minor, Op. 37",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 37",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1800,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1800年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-piano-concerto-3-c-minor-master",
    "alternateRecordingIds": [
      "rec-beethoven-piano-concerto-3-c-minor-alt1",
      "rec-beethoven-piano-concerto-3-c-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-piano-concerto-4-g",
    "title": "G大调第四钢琴协奏曲",
    "titleOriginal": "Piano Concerto No. 4 in G major, Op. 58",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 58",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1806,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1806年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-piano-concerto-4-g-master",
    "alternateRecordingIds": [
      "rec-beethoven-piano-concerto-4-g-alt1",
      "rec-beethoven-piano-concerto-4-g-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-violin-concerto-d",
    "title": "D大调小提琴协奏曲",
    "titleOriginal": "Violin Concerto in D major, Op. 61",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 61",
    "genre": "小提琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1806,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1806年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-violin-concerto-d-master",
    "alternateRecordingIds": [
      "rec-beethoven-violin-concerto-d-alt1",
      "rec-beethoven-violin-concerto-d-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-triple-concerto",
    "title": "C大调三重协奏曲（钢琴、提琴、大提琴）",
    "titleOriginal": "Triple Concerto in C major, Op. 56",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 56",
    "genre": "多重协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1803,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1803年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-triple-concerto-master",
    "alternateRecordingIds": [
      "rec-beethoven-triple-concerto-alt1",
      "rec-beethoven-triple-concerto-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-coriolan-overture",
    "title": "《科里奥兰》序曲",
    "titleOriginal": "Coriolan Overture, Op. 62",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 62",
    "genre": "戏剧序曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1807,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1807年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-coriolan-overture-master",
    "alternateRecordingIds": [
      "rec-beethoven-coriolan-overture-alt1",
      "rec-beethoven-coriolan-overture-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-egmont-overture",
    "title": "《艾格蒙特》序曲",
    "titleOriginal": "Egmont Overture, Op. 84",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 84",
    "genre": "戏剧序曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1810,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1810年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-egmont-overture-master",
    "alternateRecordingIds": [
      "rec-beethoven-egmont-overture-alt1",
      "rec-beethoven-egmont-overture-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-piano-sonata-8-pathetique",
    "title": "C小调第八钢琴奏鸣曲《悲怆》",
    "titleOriginal": "Piano Sonata No. 8 in C minor, \"Pathétique\"",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 13",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1798,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1798年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-piano-sonata-8-pathetique-master",
    "alternateRecordingIds": [
      "rec-beethoven-piano-sonata-8-pathetique-alt1",
      "rec-beethoven-piano-sonata-8-pathetique-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-piano-sonata-21-waldstein",
    "title": "C大调第二十一钢琴奏鸣曲《华尔斯坦》",
    "titleOriginal": "Piano Sonata No. 21 in C major, \"Waldstein\"",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 53",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1804,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1804年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-piano-sonata-21-waldstein-master",
    "alternateRecordingIds": [
      "rec-beethoven-piano-sonata-21-waldstein-alt1",
      "rec-beethoven-piano-sonata-21-waldstein-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-piano-sonata-23-appassionata",
    "title": "F小调第二十三钢琴奏鸣曲《热情》",
    "titleOriginal": "Piano Sonata No. 23 in F minor, \"Appassionata\"",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 57",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1805,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1805年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-piano-sonata-23-appassionata-master",
    "alternateRecordingIds": [
      "rec-beethoven-piano-sonata-23-appassionata-alt1",
      "rec-beethoven-piano-sonata-23-appassionata-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-piano-sonata-29-hammerklavier",
    "title": "降B大调第二十九钢琴奏鸣曲《槌子键琴》",
    "titleOriginal": "Piano Sonata No. 29, \"Hammerklavier\"",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 106",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1818,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1818年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-piano-sonata-29-hammerklavier-master",
    "alternateRecordingIds": [
      "rec-beethoven-piano-sonata-29-hammerklavier-alt1",
      "rec-beethoven-piano-sonata-29-hammerklavier-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-piano-sonata-32-c-minor",
    "title": "C小调第三十二钢琴奏鸣曲（最后绝笔）",
    "titleOriginal": "Piano Sonata No. 32 in C minor, Op. 111",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 111",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1822,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1822年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-piano-sonata-32-c-minor-master",
    "alternateRecordingIds": [
      "rec-beethoven-piano-sonata-32-c-minor-alt1",
      "rec-beethoven-piano-sonata-32-c-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-violin-sonata-5-spring",
    "title": "F大调第五小提琴奏鸣曲《春天》",
    "titleOriginal": "Violin Sonata No. 5 in F major, \"Spring\"",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 24",
    "genre": "室内乐奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1801,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1801年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-violin-sonata-5-spring-master",
    "alternateRecordingIds": [
      "rec-beethoven-violin-sonata-5-spring-alt1",
      "rec-beethoven-violin-sonata-5-spring-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-violin-sonata-9-kreutzer",
    "title": "A大调第九小提琴奏鸣曲《克罗采》",
    "titleOriginal": "Violin Sonata No. 9, \"Kreutzer\"",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 47",
    "genre": "室内乐奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1803,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1803年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-violin-sonata-9-kreutzer-master",
    "alternateRecordingIds": [
      "rec-beethoven-violin-sonata-9-kreutzer-alt1",
      "rec-beethoven-violin-sonata-9-kreutzer-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-string-quartet-14-c-sharp-minor",
    "title": "升C小调第十四弦乐四重奏",
    "titleOriginal": "String Quartet No. 14 in C-sharp minor, Op. 131",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 131",
    "genre": "弦乐四重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1826,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1826年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-string-quartet-14-c-sharp-minor-master",
    "alternateRecordingIds": [
      "rec-beethoven-string-quartet-14-c-sharp-minor-alt1",
      "rec-beethoven-string-quartet-14-c-sharp-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-grosse-fuge",
    "title": "降B大调《大赋格》",
    "titleOriginal": "Große Fuge in B-flat major, Op. 133",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 133",
    "genre": "复调单乐章",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1825,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1825年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-grosse-fuge-master",
    "alternateRecordingIds": [
      "rec-beethoven-grosse-fuge-alt1",
      "rec-beethoven-grosse-fuge-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "beethoven-missa-solemnis-op123",
    "title": "D大调《庄严弥撒》",
    "titleOriginal": "Missa Solemnis in D major, Op. 123",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 123",
    "genre": "弥撒曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1823,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1823年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-beethoven-missa-solemnis-op123-master",
    "alternateRecordingIds": [
      "rec-beethoven-missa-solemnis-op123-alt1",
      "rec-beethoven-missa-solemnis-op123-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schubert-symphony-8-unfinished-full",
    "title": "B小调第八交响曲《未完成》",
    "titleOriginal": "Symphony No. 8 in B minor, \"Unfinished\"",
    "composerId": "composer-schubert",
    "opusNumber": "D. 759",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1822,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1822年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schubert-symphony-8-unfinished-full-master",
    "alternateRecordingIds": [
      "rec-schubert-symphony-8-unfinished-full-alt1",
      "rec-schubert-symphony-8-unfinished-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schubert",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schubert-symphony-9-great",
    "title": "C大调第九交响曲《伟大》",
    "titleOriginal": "Symphony No. 9 in C major, \"The Great\"",
    "composerId": "composer-schubert",
    "opusNumber": "D. 944",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1828,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1828年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schubert-symphony-9-great-master",
    "alternateRecordingIds": [
      "rec-schubert-symphony-9-great-alt1",
      "rec-schubert-symphony-9-great-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schubert",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schubert-trout-quintet-full",
    "title": "A大调钢琴五重奏《鳟鱼》",
    "titleOriginal": "Piano Quintet in A major, \"The Trout\"",
    "composerId": "composer-schubert",
    "opusNumber": "D. 667",
    "genre": "室内乐五重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1819,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1819年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schubert-trout-quintet-full-master",
    "alternateRecordingIds": [
      "rec-schubert-trout-quintet-full-alt1",
      "rec-schubert-trout-quintet-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schubert",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schubert-string-quartet-14-death",
    "title": "D小调第十四弦乐四重奏《死神与少女》",
    "titleOriginal": "String Quartet No. 14, \"Death and the Maiden\"",
    "composerId": "composer-schubert",
    "opusNumber": "D. 810",
    "genre": "弦乐四重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1824,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1824年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schubert-string-quartet-14-death-master",
    "alternateRecordingIds": [
      "rec-schubert-string-quartet-14-death-alt1",
      "rec-schubert-string-quartet-14-death-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schubert",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schubert-string-quintet-c",
    "title": "C大调弦乐五重奏（双大提琴）",
    "titleOriginal": "String Quintet in C major, D. 956",
    "composerId": "composer-schubert",
    "opusNumber": "D. 956",
    "genre": "室内乐五重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1828,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1828年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schubert-string-quintet-c-master",
    "alternateRecordingIds": [
      "rec-schubert-string-quintet-c-alt1",
      "rec-schubert-string-quintet-c-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schubert",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schubert-winterreise-complete",
    "title": "声乐套曲《冬之旅》（二十四首）",
    "titleOriginal": "Winterreise, D. 911",
    "composerId": "composer-schubert",
    "opusNumber": "D. 911",
    "genre": "艺术歌曲套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1827,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1827年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schubert-winterreise-complete-master",
    "alternateRecordingIds": [
      "rec-schubert-winterreise-complete-alt1",
      "rec-schubert-winterreise-complete-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schubert",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schubert-die-schone-mullerin",
    "title": "声乐套曲《美丽的磨坊女》",
    "titleOriginal": "Die schöne Müllerin, D. 795",
    "composerId": "composer-schubert",
    "opusNumber": "D. 795",
    "genre": "艺术歌曲套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1823,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1823年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schubert-die-schone-mullerin-master",
    "alternateRecordingIds": [
      "rec-schubert-die-schone-mullerin-alt1",
      "rec-schubert-die-schone-mullerin-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schubert",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schubert-piano-sonata-21-b-flat",
    "title": "降B大调第二十一钢琴奏鸣曲",
    "titleOriginal": "Piano Sonata No. 21 in B-flat major, D. 960",
    "composerId": "composer-schubert",
    "opusNumber": "D. 960",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1828,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1828年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schubert-piano-sonata-21-b-flat-master",
    "alternateRecordingIds": [
      "rec-schubert-piano-sonata-21-b-flat-alt1",
      "rec-schubert-piano-sonata-21-b-flat-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schubert",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schubert-wanderer-fantasy",
    "title": "C大调《流浪者幻想曲》",
    "titleOriginal": "Wanderer Fantasy in C major, D. 760",
    "composerId": "composer-schubert",
    "opusNumber": "D. 760",
    "genre": "钢琴幻想曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1822,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1822年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schubert-wanderer-fantasy-master",
    "alternateRecordingIds": [
      "rec-schubert-wanderer-fantasy-alt1",
      "rec-schubert-wanderer-fantasy-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schubert",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schubert-impromptus-d899",
    "title": "四首即兴曲",
    "titleOriginal": "Four Impromptus, D. 899",
    "composerId": "composer-schubert",
    "opusNumber": "D. 899",
    "genre": "钢琴即兴曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1827,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1827年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schubert-impromptus-d899-master",
    "alternateRecordingIds": [
      "rec-schubert-impromptus-d899-alt1",
      "rec-schubert-impromptus-d899-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schubert",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "berlioz-symphonie-fantastique-full",
    "title": "《幻想交响曲》（一位艺术家的生涯）",
    "titleOriginal": "Symphonie fantastique, Op. 14",
    "composerId": "composer-berlioz",
    "opusNumber": "Op. 14",
    "genre": "标题交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1830,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1830年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-berlioz-symphonie-fantastique-full-master",
    "alternateRecordingIds": [
      "rec-berlioz-symphonie-fantastique-full-alt1",
      "rec-berlioz-symphonie-fantastique-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-berlioz",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "berlioz-harold-in-italy",
    "title": "中提琴与管弦乐《哈罗尔德在意大利》",
    "titleOriginal": "Harold en Italie, Op. 16",
    "composerId": "composer-berlioz",
    "opusNumber": "Op. 16",
    "genre": "交响协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1834,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1834年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-berlioz-harold-in-italy-master",
    "alternateRecordingIds": [
      "rec-berlioz-harold-in-italy-alt1",
      "rec-berlioz-harold-in-italy-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-berlioz",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "berlioz-requiem-grande-messe",
    "title": "《安魂弥撒》（宏大安魂曲）",
    "titleOriginal": "Grande Messe des Morts, Op. 5",
    "composerId": "composer-berlioz",
    "opusNumber": "Op. 5",
    "genre": "安魂曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1837,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1837年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-berlioz-requiem-grande-messe-master",
    "alternateRecordingIds": [
      "rec-berlioz-requiem-grande-messe-alt1",
      "rec-berlioz-requiem-grande-messe-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-berlioz",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mendelssohn-symphony-3-scottish",
    "title": "A小调第三交响曲《苏格兰》",
    "titleOriginal": "Symphony No. 3 in A minor, \"Scottish\"",
    "composerId": "composer-mendelssohn",
    "opusNumber": "Op. 56",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1842,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1842年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mendelssohn-symphony-3-scottish-master",
    "alternateRecordingIds": [
      "rec-mendelssohn-symphony-3-scottish-alt1",
      "rec-mendelssohn-symphony-3-scottish-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mendelssohn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mendelssohn-symphony-4-italian",
    "title": "A大调第四交响曲《意大利》",
    "titleOriginal": "Symphony No. 4 in A major, \"Italian\"",
    "composerId": "composer-mendelssohn",
    "opusNumber": "Op. 90",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1833,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1833年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mendelssohn-symphony-4-italian-master",
    "alternateRecordingIds": [
      "rec-mendelssohn-symphony-4-italian-alt1",
      "rec-mendelssohn-symphony-4-italian-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mendelssohn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mendelssohn-hebrides-overture-full",
    "title": "《赫布里底群岛序曲》（芬格尔山洞）",
    "titleOriginal": "The Hebrides Overture, Op. 26",
    "composerId": "composer-mendelssohn",
    "opusNumber": "Op. 26",
    "genre": "音乐会序曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1830,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1830年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mendelssohn-hebrides-overture-full-master",
    "alternateRecordingIds": [
      "rec-mendelssohn-hebrides-overture-full-alt1",
      "rec-mendelssohn-hebrides-overture-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mendelssohn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mendelssohn-string-octet-op20",
    "title": "降E大调弦乐八重奏",
    "titleOriginal": "String Octet in E-flat major, Op. 20",
    "composerId": "composer-mendelssohn",
    "opusNumber": "Op. 20",
    "genre": "室内乐八重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1825,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1825年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mendelssohn-string-octet-op20-master",
    "alternateRecordingIds": [
      "rec-mendelssohn-string-octet-op20-alt1",
      "rec-mendelssohn-string-octet-op20-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mendelssohn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mendelssohn-songs-without-words",
    "title": "《无词歌》精选",
    "titleOriginal": "Lieder ohne Worte (Songs Without Words)",
    "composerId": "composer-mendelssohn",
    "opusNumber": "Op. 19/30/38",
    "genre": "钢琴小品套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1830,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1830年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mendelssohn-songs-without-words-master",
    "alternateRecordingIds": [
      "rec-mendelssohn-songs-without-words-alt1",
      "rec-mendelssohn-songs-without-words-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mendelssohn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "chopin-piano-concerto-1-e-minor",
    "title": "E小调第一钢琴协奏曲",
    "titleOriginal": "Piano Concerto No. 1 in E minor, Op. 11",
    "composerId": "composer-chopin",
    "opusNumber": "Op. 11",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1830,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1830年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-chopin-piano-concerto-1-e-minor-master",
    "alternateRecordingIds": [
      "rec-chopin-piano-concerto-1-e-minor-alt1",
      "rec-chopin-piano-concerto-1-e-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "chopin-piano-concerto-2-f-minor",
    "title": "F小调第二钢琴协奏曲",
    "titleOriginal": "Piano Concerto No. 2 in F minor, Op. 21",
    "composerId": "composer-chopin",
    "opusNumber": "Op. 21",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1830,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1830年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-chopin-piano-concerto-2-f-minor-master",
    "alternateRecordingIds": [
      "rec-chopin-piano-concerto-2-f-minor-alt1",
      "rec-chopin-piano-concerto-2-f-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "chopin-24-preludes-op28",
    "title": "二十四首前奏曲全集",
    "titleOriginal": "24 Preludes, Op. 28",
    "composerId": "composer-chopin",
    "opusNumber": "Op. 28",
    "genre": "前奏曲套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1839,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1839年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-chopin-24-preludes-op28-master",
    "alternateRecordingIds": [
      "rec-chopin-24-preludes-op28-alt1",
      "rec-chopin-24-preludes-op28-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "chopin-12-etudes-op10",
    "title": "十二首练习曲作品十",
    "titleOriginal": "12 Études, Op. 10",
    "composerId": "composer-chopin",
    "opusNumber": "Op. 10",
    "genre": "音乐会练习曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1833,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1833年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-chopin-12-etudes-op10-master",
    "alternateRecordingIds": [
      "rec-chopin-12-etudes-op10-alt1",
      "rec-chopin-12-etudes-op10-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "chopin-12-etudes-op25",
    "title": "十二首练习曲作品二十五",
    "titleOriginal": "12 Études, Op. 25",
    "composerId": "composer-chopin",
    "opusNumber": "Op. 25",
    "genre": "音乐会练习曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1837,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1837年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-chopin-12-etudes-op25-master",
    "alternateRecordingIds": [
      "rec-chopin-12-etudes-op25-alt1",
      "rec-chopin-12-etudes-op25-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "chopin-piano-sonata-2-funeral",
    "title": "降B小调第二钢琴奏鸣曲（含送葬进行曲）",
    "titleOriginal": "Piano Sonata No. 2, Op. 35",
    "composerId": "composer-chopin",
    "opusNumber": "Op. 35",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1839,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1839年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-chopin-piano-sonata-2-funeral-master",
    "alternateRecordingIds": [
      "rec-chopin-piano-sonata-2-funeral-alt1",
      "rec-chopin-piano-sonata-2-funeral-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "chopin-piano-sonata-3-b-minor",
    "title": "B小调第三钢琴奏鸣曲",
    "titleOriginal": "Piano Sonata No. 3 in B minor, Op. 58",
    "composerId": "composer-chopin",
    "opusNumber": "Op. 58",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1844,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1844年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-chopin-piano-sonata-3-b-minor-master",
    "alternateRecordingIds": [
      "rec-chopin-piano-sonata-3-b-minor-alt1",
      "rec-chopin-piano-sonata-3-b-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "chopin-ballades-complete",
    "title": "四首叙事曲全集",
    "titleOriginal": "Four Ballades, Opp. 23, 38, 47, 52",
    "composerId": "composer-chopin",
    "opusNumber": "Opp. 23/38/47/52",
    "genre": "叙事曲套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1842,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1842年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-chopin-ballades-complete-master",
    "alternateRecordingIds": [
      "rec-chopin-ballades-complete-alt1",
      "rec-chopin-ballades-complete-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "chopin-scherzos-complete",
    "title": "四首谐谑曲全集",
    "titleOriginal": "Four Scherzos, Opp. 20, 31, 39, 54",
    "composerId": "composer-chopin",
    "opusNumber": "Opp. 20/31/39/54",
    "genre": "谐谑曲套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1843,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1843年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-chopin-scherzos-complete-master",
    "alternateRecordingIds": [
      "rec-chopin-scherzos-complete-alt1",
      "rec-chopin-scherzos-complete-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "chopin-polonaise-fantaisie-op61",
    "title": "幻想波兰舞曲",
    "titleOriginal": "Polonaise-Fantaisie in A-flat major, Op. 61",
    "composerId": "composer-chopin",
    "opusNumber": "Op. 61",
    "genre": "波兰舞曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1846,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1846年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-chopin-polonaise-fantaisie-op61-master",
    "alternateRecordingIds": [
      "rec-chopin-polonaise-fantaisie-op61-alt1",
      "rec-chopin-polonaise-fantaisie-op61-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "chopin-barcarolle-op60",
    "title": "升F大调船歌",
    "titleOriginal": "Barcarolle in F-sharp major, Op. 60",
    "composerId": "composer-chopin",
    "opusNumber": "Op. 60",
    "genre": "钢琴独奏小品",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1846,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1846年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-chopin-barcarolle-op60-master",
    "alternateRecordingIds": [
      "rec-chopin-barcarolle-op60-alt1",
      "rec-chopin-barcarolle-op60-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schumann-piano-concerto-a-minor",
    "title": "A小调钢琴协奏曲",
    "titleOriginal": "Piano Concerto in A minor, Op. 54",
    "composerId": "composer-schumann",
    "opusNumber": "Op. 54",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1845,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1845年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schumann-piano-concerto-a-minor-master",
    "alternateRecordingIds": [
      "rec-schumann-piano-concerto-a-minor-alt1",
      "rec-schumann-piano-concerto-a-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schumann",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schumann-symphony-1-spring",
    "title": "降B大调第一交响曲《春》",
    "titleOriginal": "Symphony No. 1 in B-flat major, \"Spring\"",
    "composerId": "composer-schumann",
    "opusNumber": "Op. 38",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1841,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1841年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schumann-symphony-1-spring-master",
    "alternateRecordingIds": [
      "rec-schumann-symphony-1-spring-alt1",
      "rec-schumann-symphony-1-spring-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schumann",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schumann-symphony-3-rhenish",
    "title": "降E大调第三交响曲《莱茵》",
    "titleOriginal": "Symphony No. 3 in E-flat major, \"Rhenish\"",
    "composerId": "composer-schumann",
    "opusNumber": "Op. 97",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1850,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1850年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schumann-symphony-3-rhenish-master",
    "alternateRecordingIds": [
      "rec-schumann-symphony-3-rhenish-alt1",
      "rec-schumann-symphony-3-rhenish-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schumann",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schumann-symphony-4-d-minor",
    "title": "D小调第四交响曲（单乐章循环连接）",
    "titleOriginal": "Symphony No. 4 in D minor, Op. 120",
    "composerId": "composer-schumann",
    "opusNumber": "Op. 120",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1851,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1851年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schumann-symphony-4-d-minor-master",
    "alternateRecordingIds": [
      "rec-schumann-symphony-4-d-minor-alt1",
      "rec-schumann-symphony-4-d-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schumann",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schumann-carnaval-op9",
    "title": "《狂欢节》二十一个场景",
    "titleOriginal": "Carnaval, Op. 9",
    "composerId": "composer-schumann",
    "opusNumber": "Op. 9",
    "genre": "钢琴性格套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1835,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1835年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schumann-carnaval-op9-master",
    "alternateRecordingIds": [
      "rec-schumann-carnaval-op9-alt1",
      "rec-schumann-carnaval-op9-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schumann",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schumann-fantasie-in-c-op17",
    "title": "C大调幻想曲",
    "titleOriginal": "Fantasie in C major, Op. 17",
    "composerId": "composer-schumann",
    "opusNumber": "Op. 17",
    "genre": "钢琴幻想曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1836,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1836年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schumann-fantasie-in-c-op17-master",
    "alternateRecordingIds": [
      "rec-schumann-fantasie-in-c-op17-alt1",
      "rec-schumann-fantasie-in-c-op17-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schumann",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schumann-dichterliebe-op48",
    "title": "声乐套曲《诗人之恋》",
    "titleOriginal": "Dichterliebe, Op. 48",
    "composerId": "composer-schumann",
    "opusNumber": "Op. 48",
    "genre": "艺术歌曲套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1840,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1840年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schumann-dichterliebe-op48-master",
    "alternateRecordingIds": [
      "rec-schumann-dichterliebe-op48-alt1",
      "rec-schumann-dichterliebe-op48-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schumann",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schumann-piano-quintet-op44",
    "title": "降E大调钢琴五重奏",
    "titleOriginal": "Piano Quintet in E-flat major, Op. 44",
    "composerId": "composer-schumann",
    "opusNumber": "Op. 44",
    "genre": "室内乐五重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1842,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1842年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schumann-piano-quintet-op44-master",
    "alternateRecordingIds": [
      "rec-schumann-piano-quintet-op44-alt1",
      "rec-schumann-piano-quintet-op44-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schumann",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "liszt-piano-concerto-1-e-flat",
    "title": "降E大调第一钢琴协奏曲",
    "titleOriginal": "Piano Concerto No. 1 in E-flat major",
    "composerId": "composer-liszt",
    "opusNumber": "S. 124",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1849,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1849年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-liszt-piano-concerto-1-e-flat-master",
    "alternateRecordingIds": [
      "rec-liszt-piano-concerto-1-e-flat-alt1",
      "rec-liszt-piano-concerto-1-e-flat-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-liszt",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "liszt-piano-concerto-2-a",
    "title": "A大调第二钢琴协奏曲",
    "titleOriginal": "Piano Concerto No. 2 in A major",
    "composerId": "composer-liszt",
    "opusNumber": "S. 125",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1857,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1857年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-liszt-piano-concerto-2-a-master",
    "alternateRecordingIds": [
      "rec-liszt-piano-concerto-2-a-alt1",
      "rec-liszt-piano-concerto-2-a-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-liszt",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "liszt-b-minor-sonata-full",
    "title": "B小调钢琴奏鸣曲",
    "titleOriginal": "Piano Sonata in B minor, S. 178",
    "composerId": "composer-liszt",
    "opusNumber": "S. 178",
    "genre": "单乐章巨构奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1853,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1853年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-liszt-b-minor-sonata-full-master",
    "alternateRecordingIds": [
      "rec-liszt-b-minor-sonata-full-alt1",
      "rec-liszt-b-minor-sonata-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-liszt",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "liszt-transcendental-etudes",
    "title": "超技练习曲全集十二首",
    "titleOriginal": "Transcendental Études, S. 139",
    "composerId": "composer-liszt",
    "opusNumber": "S. 139",
    "genre": "超技练习曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1852,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1852年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-liszt-transcendental-etudes-master",
    "alternateRecordingIds": [
      "rec-liszt-transcendental-etudes-alt1",
      "rec-liszt-transcendental-etudes-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-liszt",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "liszt-annees-de-pelerinage-suisse",
    "title": "《旅行岁月·瑞士》",
    "titleOriginal": "Années de pèlerinage: Première année: Suisse",
    "composerId": "composer-liszt",
    "opusNumber": "S. 160",
    "genre": "钢琴音诗套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1855,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1855年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-liszt-annees-de-pelerinage-suisse-master",
    "alternateRecordingIds": [
      "rec-liszt-annees-de-pelerinage-suisse-alt1",
      "rec-liszt-annees-de-pelerinage-suisse-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-liszt",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "liszt-annees-de-pelerinage-italie",
    "title": "《旅行岁月·意大利》（含但丁奏鸣曲）",
    "titleOriginal": "Années de pèlerinage: Deuxième année: Italie",
    "composerId": "composer-liszt",
    "opusNumber": "S. 161",
    "genre": "钢琴音诗套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1858,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1858年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-liszt-annees-de-pelerinage-italie-master",
    "alternateRecordingIds": [
      "rec-liszt-annees-de-pelerinage-italie-alt1",
      "rec-liszt-annees-de-pelerinage-italie-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-liszt",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "liszt-les-preludes",
    "title": "交响诗《前奏曲》（人生的前奏）",
    "titleOriginal": "Les Préludes, S. 97",
    "composerId": "composer-liszt",
    "opusNumber": "S. 97",
    "genre": "单乐章交响诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1854,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1854年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-liszt-les-preludes-master",
    "alternateRecordingIds": [
      "rec-liszt-les-preludes-alt1",
      "rec-liszt-les-preludes-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-liszt",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "wagner-tannhauser-overture-full",
    "title": "歌剧《唐豪瑟》序曲与维纳斯堡音乐",
    "titleOriginal": "Tannhäuser: Overture and Venusberg Music",
    "composerId": "composer-wagner",
    "opusNumber": "WWV 70",
    "genre": "歌剧序曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1845,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1845年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-wagner-tannhauser-overture-full-master",
    "alternateRecordingIds": [
      "rec-wagner-tannhauser-overture-full-alt1",
      "rec-wagner-tannhauser-overture-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-wagner",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "wagner-der-fliegende-hollander",
    "title": "歌剧《漂泊的荷兰人》序曲",
    "titleOriginal": "Der fliegende Holländer: Overture",
    "composerId": "composer-wagner",
    "opusNumber": "WWV 63",
    "genre": "歌剧序曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1843,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1843年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-wagner-der-fliegende-hollander-master",
    "alternateRecordingIds": [
      "rec-wagner-der-fliegende-hollander-alt1",
      "rec-wagner-der-fliegende-hollander-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-wagner",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "wagner-lohengrin-prelude-act1",
    "title": "歌剧《罗恩格林》第一幕前奏曲",
    "titleOriginal": "Lohengrin: Prelude to Act 1",
    "composerId": "composer-wagner",
    "opusNumber": "WWV 75",
    "genre": "歌剧前奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1850,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1850年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-wagner-lohengrin-prelude-act1-master",
    "alternateRecordingIds": [
      "rec-wagner-lohengrin-prelude-act1-alt1",
      "rec-wagner-lohengrin-prelude-act1-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-wagner",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "wagner-die-meistersinger-overture",
    "title": "歌剧《纽伦堡的名歌手》前奏曲",
    "titleOriginal": "Die Meistersinger von Nürnberg: Prelude",
    "composerId": "composer-wagner",
    "opusNumber": "WWV 96",
    "genre": "歌剧前奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1868,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1868年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-wagner-die-meistersinger-overture-master",
    "alternateRecordingIds": [
      "rec-wagner-die-meistersinger-overture-alt1",
      "rec-wagner-die-meistersinger-overture-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-wagner",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "wagner-das-rheingold-entry-of-gods",
    "title": "《莱茵的黄金》众神进入瓦尔哈拉天宫",
    "titleOriginal": "Das Rheingold: Entry of the Gods into Valhalla",
    "composerId": "composer-wagner",
    "opusNumber": "WWV 86A",
    "genre": "乐剧终曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1869,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1869年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-wagner-das-rheingold-entry-of-gods-master",
    "alternateRecordingIds": [
      "rec-wagner-das-rheingold-entry-of-gods-alt1",
      "rec-wagner-das-rheingold-entry-of-gods-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-wagner",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "wagner-die-walkure-magic-fire",
    "title": "《女武神》沃坦的告别与魔火之乐",
    "titleOriginal": "Die Walküre: Wotan's Farewell and Magic Fire Music",
    "composerId": "composer-wagner",
    "opusNumber": "WWV 86B",
    "genre": "乐剧终场",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1870,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1870年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-wagner-die-walkure-magic-fire-master",
    "alternateRecordingIds": [
      "rec-wagner-die-walkure-magic-fire-alt1",
      "rec-wagner-die-walkure-magic-fire-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-wagner",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "wagner-gotterdammerung-funeral-march",
    "title": "《诸神的黄昏》齐格弗里德葬礼进行曲",
    "titleOriginal": "Götterdämmerung: Siegfried's Funeral March",
    "composerId": "composer-wagner",
    "opusNumber": "WWV 86D",
    "genre": "乐剧间奏交响",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1876,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1876年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-wagner-gotterdammerung-funeral-march-master",
    "alternateRecordingIds": [
      "rec-wagner-gotterdammerung-funeral-march-alt1",
      "rec-wagner-gotterdammerung-funeral-march-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-wagner",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "verdi-rigoletto-complete",
    "title": "歌剧《弄臣》（公爵、吉尔达与利哥莱托）",
    "titleOriginal": "Rigoletto",
    "composerId": "composer-verdi",
    "opusNumber": "Opera",
    "genre": "歌剧全剧",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1851,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1851年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-verdi-rigoletto-complete-master",
    "alternateRecordingIds": [
      "rec-verdi-rigoletto-complete-alt1",
      "rec-verdi-rigoletto-complete-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-verdi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "verdi-il-trovatore-anvil-chorus",
    "title": "歌剧《游吟诗人》铁砧大合唱",
    "titleOriginal": "Il trovatore: Anvil Chorus (Vedi! le fosche)",
    "composerId": "composer-verdi",
    "opusNumber": "Opera",
    "genre": "歌剧合唱",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1853,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1853年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-verdi-il-trovatore-anvil-chorus-master",
    "alternateRecordingIds": [
      "rec-verdi-il-trovatore-anvil-chorus-alt1",
      "rec-verdi-il-trovatore-anvil-chorus-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-verdi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "verdi-la-traviata-complete",
    "title": "歌剧《茶花女》（薇奥莱塔的悲剧爱情）",
    "titleOriginal": "La traviata",
    "composerId": "composer-verdi",
    "opusNumber": "Opera",
    "genre": "歌剧全剧",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1853,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1853年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-verdi-la-traviata-complete-master",
    "alternateRecordingIds": [
      "rec-verdi-la-traviata-complete-alt1",
      "rec-verdi-la-traviata-complete-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-verdi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "verdi-aida-triumphal-scene",
    "title": "歌剧《阿依达》凯旋进行曲与大合唱",
    "titleOriginal": "Aida: Grand March and Ballet",
    "composerId": "composer-verdi",
    "opusNumber": "Opera",
    "genre": "歌剧场景",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1871,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1871年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-verdi-aida-triumphal-scene-master",
    "alternateRecordingIds": [
      "rec-verdi-aida-triumphal-scene-alt1",
      "rec-verdi-aida-triumphal-scene-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-verdi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "verdi-otello-niun-mi-tema",
    "title": "歌剧《奥赛罗》终曲·死前遗言",
    "titleOriginal": "Otello: Niun mi tema",
    "composerId": "composer-verdi",
    "opusNumber": "Opera",
    "genre": "歌剧独白咏叹调",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1887,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1887年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-verdi-otello-niun-mi-tema-master",
    "alternateRecordingIds": [
      "rec-verdi-otello-niun-mi-tema-alt1",
      "rec-verdi-otello-niun-mi-tema-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-verdi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "verdi-falstaff-tutto-nel-mondo",
    "title": "歌剧《法斯塔夫》终曲大赋格·世事皆玩笑",
    "titleOriginal": "Falstaff: Tutto nel mondo è burla",
    "composerId": "composer-verdi",
    "opusNumber": "Opera",
    "genre": "喜剧赋格终曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1893,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1893年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-verdi-falstaff-tutto-nel-mondo-master",
    "alternateRecordingIds": [
      "rec-verdi-falstaff-tutto-nel-mondo-alt1",
      "rec-verdi-falstaff-tutto-nel-mondo-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-verdi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-symphony-1-c-minor",
    "title": "C小调第一交响曲（贝多芬第十）",
    "titleOriginal": "Symphony No. 1 in C minor, Op. 68",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 68",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1876,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1876年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-symphony-1-c-minor-master",
    "alternateRecordingIds": [
      "rec-brahms-symphony-1-c-minor-alt1",
      "rec-brahms-symphony-1-c-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-symphony-2-d",
    "title": "D大调第二交响曲（田园交响）",
    "titleOriginal": "Symphony No. 2 in D major, Op. 73",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 73",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1877,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1877年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-symphony-2-d-master",
    "alternateRecordingIds": [
      "rec-brahms-symphony-2-d-alt1",
      "rec-brahms-symphony-2-d-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-symphony-3-f",
    "title": "F大调第三交响曲（自由而喜悦）",
    "titleOriginal": "Symphony No. 3 in F major, Op. 90",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 90",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1883,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1883年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-symphony-3-f-master",
    "alternateRecordingIds": [
      "rec-brahms-symphony-3-f-alt1",
      "rec-brahms-symphony-3-f-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-piano-concerto-2-b-flat",
    "title": "降B大调第二钢琴协奏曲（四乐章宏构）",
    "titleOriginal": "Piano Concerto No. 2 in B-flat major, Op. 83",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 83",
    "genre": "交响协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1881,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1881年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-piano-concerto-2-b-flat-master",
    "alternateRecordingIds": [
      "rec-brahms-piano-concerto-2-b-flat-alt1",
      "rec-brahms-piano-concerto-2-b-flat-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-double-concerto-a-minor",
    "title": "A小调双重协奏曲（小提琴与大提琴）",
    "titleOriginal": "Double Concerto in A minor, Op. 102",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 102",
    "genre": "双重协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1887,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1887年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-double-concerto-a-minor-master",
    "alternateRecordingIds": [
      "rec-brahms-double-concerto-a-minor-alt1",
      "rec-brahms-double-concerto-a-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-haydn-variations",
    "title": "《海顿主题变奏曲》（圣安东尼合唱）",
    "titleOriginal": "Variations on a Theme by Joseph Haydn, Op. 56a",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 56a",
    "genre": "管弦乐变奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1873,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1873年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-haydn-variations-master",
    "alternateRecordingIds": [
      "rec-brahms-haydn-variations-alt1",
      "rec-brahms-haydn-variations-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-academic-festival-overture",
    "title": "《大学庆典序曲》",
    "titleOriginal": "Academic Festival Overture, Op. 80",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 80",
    "genre": "音乐会序曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1880,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1880年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-academic-festival-overture-master",
    "alternateRecordingIds": [
      "rec-brahms-academic-festival-overture-alt1",
      "rec-brahms-academic-festival-overture-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-tragic-overture",
    "title": "《悲剧序曲》",
    "titleOriginal": "Tragic Overture, Op. 81",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 81",
    "genre": "音乐会序曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1880,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1880年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-tragic-overture-master",
    "alternateRecordingIds": [
      "rec-brahms-tragic-overture-alt1",
      "rec-brahms-tragic-overture-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-german-requiem-op45",
    "title": "《德意志安魂曲》（为生者抚慰哀伤）",
    "titleOriginal": "A German Requiem, Op. 45",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 45",
    "genre": "宗教安魂大作",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1868,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1868年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-german-requiem-op45-master",
    "alternateRecordingIds": [
      "rec-brahms-german-requiem-op45-alt1",
      "rec-brahms-german-requiem-op45-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-violin-sonata-1-rain",
    "title": "G大调第一小提琴奏鸣曲《雨之歌》",
    "titleOriginal": "Violin Sonata No. 1 in G major, \"Regenlied\"",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 78",
    "genre": "室内乐奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1879,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1879年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-violin-sonata-1-rain-master",
    "alternateRecordingIds": [
      "rec-brahms-violin-sonata-1-rain-alt1",
      "rec-brahms-violin-sonata-1-rain-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-cello-sonata-1-e-minor",
    "title": "E小调第一大提琴奏鸣曲",
    "titleOriginal": "Cello Sonata No. 1 in E minor, Op. 38",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 38",
    "genre": "室内乐奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1865,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1865年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-cello-sonata-1-e-minor-master",
    "alternateRecordingIds": [
      "rec-brahms-cello-sonata-1-e-minor-alt1",
      "rec-brahms-cello-sonata-1-e-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-clarinet-quintet-b-minor",
    "title": "B小调单簧管五重奏（晚秋绝美深思）",
    "titleOriginal": "Clarinet Quintet in B minor, Op. 115",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 115",
    "genre": "室内乐五重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1891,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1891年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-clarinet-quintet-b-minor-master",
    "alternateRecordingIds": [
      "rec-brahms-clarinet-quintet-b-minor-alt1",
      "rec-brahms-clarinet-quintet-b-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "brahms-intermezzi-op117",
    "title": "三首间奏曲（献给孤独的摇篮曲）",
    "titleOriginal": "Three Intermezzi, Op. 117",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 117",
    "genre": "晚期钢琴小品",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1892,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1892年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-brahms-intermezzi-op117-master",
    "alternateRecordingIds": [
      "rec-brahms-intermezzi-op117-alt1",
      "rec-brahms-intermezzi-op117-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bruckner-symphony-7-e",
    "title": "E大调第七交响曲（悼念瓦格纳慢板）",
    "titleOriginal": "Symphony No. 7 in E major",
    "composerId": "composer-bruckner",
    "opusNumber": "WAB 107",
    "genre": "巨构交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1883,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1883年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bruckner-symphony-7-e-master",
    "alternateRecordingIds": [
      "rec-bruckner-symphony-7-e-alt1",
      "rec-bruckner-symphony-7-e-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bruckner",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bruckner-symphony-9-d-minor",
    "title": "D小调第九交响曲（题献给敬爱的上帝）",
    "titleOriginal": "Symphony No. 9 in D minor (Unfinished)",
    "composerId": "composer-bruckner",
    "opusNumber": "WAB 109",
    "genre": "巨构交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1896,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1896年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bruckner-symphony-9-d-minor-master",
    "alternateRecordingIds": [
      "rec-bruckner-symphony-9-d-minor-alt1",
      "rec-bruckner-symphony-9-d-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bruckner",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bruckner-te-deum",
    "title": "C大调《感恩赞》",
    "titleOriginal": "Te Deum in C major, WAB 45",
    "composerId": "composer-bruckner",
    "opusNumber": "WAB 45",
    "genre": "合唱交响赞美诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1884,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1884年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bruckner-te-deum-master",
    "alternateRecordingIds": [
      "rec-bruckner-te-deum-alt1",
      "rec-bruckner-te-deum-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bruckner",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "tchaikovsky-symphony-4-f-minor",
    "title": "F小调第四交响曲（命运圆号开篇）",
    "titleOriginal": "Symphony No. 4 in F minor, Op. 36",
    "composerId": "composer-tchaikovsky",
    "opusNumber": "Op. 36",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1877,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1877年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-tchaikovsky-symphony-4-f-minor-master",
    "alternateRecordingIds": [
      "rec-tchaikovsky-symphony-4-f-minor-alt1",
      "rec-tchaikovsky-symphony-4-f-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-tchaikovsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "tchaikovsky-symphony-5-e-minor",
    "title": "E小调第五交响曲（命运主题的蜕变）",
    "titleOriginal": "Symphony No. 5 in E minor, Op. 64",
    "composerId": "composer-tchaikovsky",
    "opusNumber": "Op. 64",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1888,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1888年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-tchaikovsky-symphony-5-e-minor-master",
    "alternateRecordingIds": [
      "rec-tchaikovsky-symphony-5-e-minor-alt1",
      "rec-tchaikovsky-symphony-5-e-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-tchaikovsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "tchaikovsky-violin-concerto-d-full",
    "title": "D大调小提琴协奏曲",
    "titleOriginal": "Violin Concerto in D major, Op. 35",
    "composerId": "composer-tchaikovsky",
    "opusNumber": "Op. 35",
    "genre": "小提琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1878,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1878年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-tchaikovsky-violin-concerto-d-full-master",
    "alternateRecordingIds": [
      "rec-tchaikovsky-violin-concerto-d-full-alt1",
      "rec-tchaikovsky-violin-concerto-d-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-tchaikovsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "tchaikovsky-variations-on-rococo",
    "title": "大提琴与乐队《洛可可主题变奏曲》",
    "titleOriginal": "Variations on a Rococo Theme, Op. 33",
    "composerId": "composer-tchaikovsky",
    "opusNumber": "Op. 33",
    "genre": "大提琴变奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1876,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1876年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-tchaikovsky-variations-on-rococo-master",
    "alternateRecordingIds": [
      "rec-tchaikovsky-variations-on-rococo-alt1",
      "rec-tchaikovsky-variations-on-rococo-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-tchaikovsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "tchaikovsky-romeo-and-juliet-fantasy",
    "title": "幻想序曲《罗密欧与朱丽叶》",
    "titleOriginal": "Romeo and Juliet Fantasy Overture",
    "composerId": "composer-tchaikovsky",
    "opusNumber": "TH 42",
    "genre": "交响幻想序曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1869,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1869年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-tchaikovsky-romeo-and-juliet-fantasy-master",
    "alternateRecordingIds": [
      "rec-tchaikovsky-romeo-and-juliet-fantasy-alt1",
      "rec-tchaikovsky-romeo-and-juliet-fantasy-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-tchaikovsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "tchaikovsky-serenade-for-strings",
    "title": "C大调弦乐小夜曲",
    "titleOriginal": "Serenade for Strings in C major, Op. 48",
    "composerId": "composer-tchaikovsky",
    "opusNumber": "Op. 48",
    "genre": "纯弦乐小夜曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1880,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1880年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-tchaikovsky-serenade-for-strings-master",
    "alternateRecordingIds": [
      "rec-tchaikovsky-serenade-for-strings-alt1",
      "rec-tchaikovsky-serenade-for-strings-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-tchaikovsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "tchaikovsky-the-sleeping-beauty-suite",
    "title": "芭蕾舞剧《睡美人》管弦乐组曲",
    "titleOriginal": "The Sleeping Beauty Suite, Op. 66a",
    "composerId": "composer-tchaikovsky",
    "opusNumber": "Op. 66a",
    "genre": "芭蕾组曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1890,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1890年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-tchaikovsky-the-sleeping-beauty-suite-master",
    "alternateRecordingIds": [
      "rec-tchaikovsky-the-sleeping-beauty-suite-alt1",
      "rec-tchaikovsky-the-sleeping-beauty-suite-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-tchaikovsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "dvorak-cello-concerto-b-minor-full",
    "title": "B小调大提琴协奏曲（大提琴之王）",
    "titleOriginal": "Cello Concerto in B minor, Op. 104",
    "composerId": "composer-dvorak",
    "opusNumber": "Op. 104",
    "genre": "大提琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1895,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1895年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-dvorak-cello-concerto-b-minor-full-master",
    "alternateRecordingIds": [
      "rec-dvorak-cello-concerto-b-minor-full-alt1",
      "rec-dvorak-cello-concerto-b-minor-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-dvorak",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "dvorak-symphony-8-g",
    "title": "G大调第八交响曲（捷克阳光田园）",
    "titleOriginal": "Symphony No. 8 in G major, Op. 88",
    "composerId": "composer-dvorak",
    "opusNumber": "Op. 88",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1889,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1889年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-dvorak-symphony-8-g-master",
    "alternateRecordingIds": [
      "rec-dvorak-symphony-8-g-alt1",
      "rec-dvorak-symphony-8-g-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-dvorak",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "dvorak-symphony-7-d-minor",
    "title": "D小调第七交响曲（勃拉姆斯式的悲剧严谨）",
    "titleOriginal": "Symphony No. 7 in D minor, Op. 70",
    "composerId": "composer-dvorak",
    "opusNumber": "Op. 70",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1885,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1885年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-dvorak-symphony-7-d-minor-master",
    "alternateRecordingIds": [
      "rec-dvorak-symphony-7-d-minor-alt1",
      "rec-dvorak-symphony-7-d-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-dvorak",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "dvorak-string-quartet-12-american",
    "title": "F大调第十二弦乐四重奏《美国》",
    "titleOriginal": "String Quartet No. 12, \"American\"",
    "composerId": "composer-dvorak",
    "opusNumber": "Op. 96",
    "genre": "弦乐四重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1893,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1893年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-dvorak-string-quartet-12-american-master",
    "alternateRecordingIds": [
      "rec-dvorak-string-quartet-12-american-alt1",
      "rec-dvorak-string-quartet-12-american-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-dvorak",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "dvorak-slavonic-dances-op46",
    "title": "《斯拉夫舞曲》第一集八首",
    "titleOriginal": "Slavonic Dances, Op. 46",
    "composerId": "composer-dvorak",
    "opusNumber": "Op. 46",
    "genre": "管弦乐舞曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1878,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1878年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-dvorak-slavonic-dances-op46-master",
    "alternateRecordingIds": [
      "rec-dvorak-slavonic-dances-op46-alt1",
      "rec-dvorak-slavonic-dances-op46-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-dvorak",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "dvorak-rusalka-song-to-moon",
    "title": "歌剧《水仙女》·月亮颂",
    "titleOriginal": "Song to the Moon from Rusalka",
    "composerId": "composer-dvorak",
    "opusNumber": "Op. 114",
    "genre": "歌剧咏叹调",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1900,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1900年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-dvorak-rusalka-song-to-moon-master",
    "alternateRecordingIds": [
      "rec-dvorak-rusalka-song-to-moon-alt1",
      "rec-dvorak-rusalka-song-to-moon-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-dvorak",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "grieg-peer-gynt-suite-1",
    "title": "《皮尔·金特》第一管弦乐组曲（晨景与山魔王）",
    "titleOriginal": "Peer Gynt Suite No. 1, Op. 46",
    "composerId": "composer-grieg",
    "opusNumber": "Op. 46",
    "genre": "戏剧管弦组曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1888,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1888年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-grieg-peer-gynt-suite-1-master",
    "alternateRecordingIds": [
      "rec-grieg-peer-gynt-suite-1-alt1",
      "rec-grieg-peer-gynt-suite-1-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-grieg",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "grieg-peer-gynt-suite-2",
    "title": "《皮尔·金特》第二管弦乐组曲（索尔维格之歌）",
    "titleOriginal": "Peer Gynt Suite No. 2, Op. 55",
    "composerId": "composer-grieg",
    "opusNumber": "Op. 55",
    "genre": "戏剧管弦组曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1891,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1891年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-grieg-peer-gynt-suite-2-master",
    "alternateRecordingIds": [
      "rec-grieg-peer-gynt-suite-2-alt1",
      "rec-grieg-peer-gynt-suite-2-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-grieg",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "grieg-piano-concerto-a-minor-full",
    "title": "A小调钢琴协奏曲",
    "titleOriginal": "Piano Concerto in A minor, Op. 16",
    "composerId": "composer-grieg",
    "opusNumber": "Op. 16",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1868,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1868年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-grieg-piano-concerto-a-minor-full-master",
    "alternateRecordingIds": [
      "rec-grieg-piano-concerto-a-minor-full-alt1",
      "rec-grieg-piano-concerto-a-minor-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-grieg",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "grieg-holberg-suite",
    "title": "《霍尔堡组曲》（致敬十八世纪的纯弦乐）",
    "titleOriginal": "Holberg Suite, Op. 40",
    "composerId": "composer-grieg",
    "opusNumber": "Op. 40",
    "genre": "弦乐组曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1884,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1884年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-grieg-holberg-suite-master",
    "alternateRecordingIds": [
      "rec-grieg-holberg-suite-alt1",
      "rec-grieg-holberg-suite-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-grieg",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "rimsky-scheherazade-full",
    "title": "交响组曲《天方夜谭》（舍赫拉查德）",
    "titleOriginal": "Scheherazade, Op. 35",
    "composerId": "composer-rimsky-korsakov",
    "opusNumber": "Op. 35",
    "genre": "交响组曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1888,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1888年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-rimsky-scheherazade-full-master",
    "alternateRecordingIds": [
      "rec-rimsky-scheherazade-full-alt1",
      "rec-rimsky-scheherazade-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-rimsky-korsakov",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "rimsky-capriccio-espagnol",
    "title": "《西班牙随想曲》",
    "titleOriginal": "Capriccio Espagnol, Op. 34",
    "composerId": "composer-rimsky-korsakov",
    "opusNumber": "Op. 34",
    "genre": "管弦乐随想曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1887,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1887年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-rimsky-capriccio-espagnol-master",
    "alternateRecordingIds": [
      "rec-rimsky-capriccio-espagnol-alt1",
      "rec-rimsky-capriccio-espagnol-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-rimsky-korsakov",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "rimsky-russian-easter-overture",
    "title": "《俄罗斯复活节序曲》",
    "titleOriginal": "Russian Easter Festival Overture, Op. 36",
    "composerId": "composer-rimsky-korsakov",
    "opusNumber": "Op. 36",
    "genre": "音乐会序曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1888,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1888年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-rimsky-russian-easter-overture-master",
    "alternateRecordingIds": [
      "rec-rimsky-russian-easter-overture-alt1",
      "rec-rimsky-russian-easter-overture-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-rimsky-korsakov",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mussorgsky-night-on-bald-mountain-full",
    "title": "交响诗《荒山之夜》",
    "titleOriginal": "Night on Bald Mountain",
    "composerId": "composer-mussorgsky",
    "opusNumber": "Tone Poem",
    "genre": "单乐章交响诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1867,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1867年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mussorgsky-night-on-bald-mountain-full-master",
    "alternateRecordingIds": [
      "rec-mussorgsky-night-on-bald-mountain-full-alt1",
      "rec-mussorgsky-night-on-bald-mountain-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mussorgsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mussorgsky-boris-godunov-coronation",
    "title": "歌剧《鲍里斯·戈杜诺夫》加冕钟鸣大合唱",
    "titleOriginal": "Boris Godunov: Coronation Scene",
    "composerId": "composer-mussorgsky",
    "opusNumber": "Opera",
    "genre": "歌剧宏大合唱",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1869,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1869年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mussorgsky-boris-godunov-coronation-master",
    "alternateRecordingIds": [
      "rec-mussorgsky-boris-godunov-coronation-alt1",
      "rec-mussorgsky-boris-godunov-coronation-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mussorgsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mahler-das-lied-von-der-erde-full",
    "title": "交响性声乐套曲《大地之歌》（唐诗绝唱）",
    "titleOriginal": "Das Lied von der Erde",
    "composerId": "composer-mahler",
    "opusNumber": "Symphonic Song",
    "genre": "交响声乐史诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1909,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1909年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mahler-das-lied-von-der-erde-full-master",
    "alternateRecordingIds": [
      "rec-mahler-das-lied-von-der-erde-full-alt1",
      "rec-mahler-das-lied-von-der-erde-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mahler",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mahler-symphony-2-resurrection-full",
    "title": "C小调第二交响曲《复活》",
    "titleOriginal": "Symphony No. 2 in C minor, \"Resurrection\"",
    "composerId": "composer-mahler",
    "opusNumber": "Sym 2",
    "genre": "合唱交响巨制",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1894,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1894年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mahler-symphony-2-resurrection-full-master",
    "alternateRecordingIds": [
      "rec-mahler-symphony-2-resurrection-full-alt1",
      "rec-mahler-symphony-2-resurrection-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mahler",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mahler-symphony-3-d-minor",
    "title": "D小调第三交响曲（大自然与全宇宙的呼吸）",
    "titleOriginal": "Symphony No. 3 in D minor",
    "composerId": "composer-mahler",
    "opusNumber": "Sym 3",
    "genre": "超长交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1896,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1896年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mahler-symphony-3-d-minor-master",
    "alternateRecordingIds": [
      "rec-mahler-symphony-3-d-minor-alt1",
      "rec-mahler-symphony-3-d-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mahler",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mahler-symphony-4-g",
    "title": "G大调第四交响曲（天国的生活与童声天使）",
    "titleOriginal": "Symphony No. 4 in G major",
    "composerId": "composer-mahler",
    "opusNumber": "Sym 4",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1900,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1900年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mahler-symphony-4-g-master",
    "alternateRecordingIds": [
      "rec-mahler-symphony-4-g-alt1",
      "rec-mahler-symphony-4-g-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mahler",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mahler-symphony-8-symphony-of-thousand",
    "title": "降E大调第八交响曲《千人交响曲》",
    "titleOriginal": "Symphony No. 8, \"Symphony of a Thousand\"",
    "composerId": "composer-mahler",
    "opusNumber": "Sym 8",
    "genre": "超大型合唱交响",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1906,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1906年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mahler-symphony-8-symphony-of-thousand-master",
    "alternateRecordingIds": [
      "rec-mahler-symphony-8-symphony-of-thousand-alt1",
      "rec-mahler-symphony-8-symphony-of-thousand-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mahler",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "mahler-symphony-9-d",
    "title": "D大调第九交响曲（向尘世人间的平静永决）",
    "titleOriginal": "Symphony No. 9 in D major",
    "composerId": "composer-mahler",
    "opusNumber": "Sym 9",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1909,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1909年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-mahler-symphony-9-d-master",
    "alternateRecordingIds": [
      "rec-mahler-symphony-9-d-alt1",
      "rec-mahler-symphony-9-d-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mahler",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "strauss-also-sprach-zarathustra-full",
    "title": "交响诗《查拉图斯特拉如是说》",
    "titleOriginal": "Also sprach Zarathustra, Op. 30",
    "composerId": "composer-strauss-r",
    "opusNumber": "Op. 30",
    "genre": "交响诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1896,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1896年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-strauss-also-sprach-zarathustra-full-master",
    "alternateRecordingIds": [
      "rec-strauss-also-sprach-zarathustra-full-alt1",
      "rec-strauss-also-sprach-zarathustra-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-strauss-r",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "strauss-don-juan-full",
    "title": "交响诗《唐璜》",
    "titleOriginal": "Don Juan, Op. 20",
    "composerId": "composer-strauss-r",
    "opusNumber": "Op. 20",
    "genre": "交响诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1888,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1888年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-strauss-don-juan-full-master",
    "alternateRecordingIds": [
      "rec-strauss-don-juan-full-alt1",
      "rec-strauss-don-juan-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-strauss-r",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "strauss-till-eulenspiegel-full",
    "title": "交响诗《蒂尔的恶作剧》",
    "titleOriginal": "Till Eulenspiegels lustige Streiche, Op. 28",
    "composerId": "composer-strauss-r",
    "opusNumber": "Op. 28",
    "genre": "交响诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1895,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1895年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-strauss-till-eulenspiegel-full-master",
    "alternateRecordingIds": [
      "rec-strauss-till-eulenspiegel-full-alt1",
      "rec-strauss-till-eulenspiegel-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-strauss-r",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "strauss-eine-alpensinfonie-full",
    "title": "《阿尔卑斯山交响曲》（日出至暴风雨下山）",
    "titleOriginal": "Eine Alpensinfonie, Op. 64",
    "composerId": "composer-strauss-r",
    "opusNumber": "Op. 64",
    "genre": "大型写景交响诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1915,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1915年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-strauss-eine-alpensinfonie-full-master",
    "alternateRecordingIds": [
      "rec-strauss-eine-alpensinfonie-full-alt1",
      "rec-strauss-eine-alpensinfonie-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-strauss-r",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "strauss-four-last-songs",
    "title": "《最后四首歌》（落日、九月与晚霞春华）",
    "titleOriginal": "Four Last Songs (Vier letzte Lieder)",
    "composerId": "composer-strauss-r",
    "opusNumber": "TrV 296",
    "genre": "女高音管弦乐艺术歌曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1948,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1948年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-strauss-four-last-songs-master",
    "alternateRecordingIds": [
      "rec-strauss-four-last-songs-alt1",
      "rec-strauss-four-last-songs-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-strauss-r",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "sibelius-symphony-2-d",
    "title": "D大调第二交响曲（芬兰独立英雄战歌）",
    "titleOriginal": "Symphony No. 2 in D major, Op. 43",
    "composerId": "composer-sibelius",
    "opusNumber": "Op. 43",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1902,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1902年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-sibelius-symphony-2-d-master",
    "alternateRecordingIds": [
      "rec-sibelius-symphony-2-d-alt1",
      "rec-sibelius-symphony-2-d-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-sibelius",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "sibelius-symphony-5-e-flat",
    "title": "降E大调第五交响曲（十六只天鹅号角颂歌）",
    "titleOriginal": "Symphony No. 5 in E-flat major, Op. 82",
    "composerId": "composer-sibelius",
    "opusNumber": "Op. 82",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1915,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1915年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-sibelius-symphony-5-e-flat-master",
    "alternateRecordingIds": [
      "rec-sibelius-symphony-5-e-flat-alt1",
      "rec-sibelius-symphony-5-e-flat-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-sibelius",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "sibelius-finlandia-full",
    "title": "交响诗《芬兰颂》",
    "titleOriginal": "Finlandia, Op. 26",
    "composerId": "composer-sibelius",
    "opusNumber": "Op. 26",
    "genre": "爱国交响诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1899,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1899年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-sibelius-finlandia-full-master",
    "alternateRecordingIds": [
      "rec-sibelius-finlandia-full-alt1",
      "rec-sibelius-finlandia-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-sibelius",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "sibelius-valse-triste-full",
    "title": "《悲伤圆舞曲》",
    "titleOriginal": "Valse triste, Op. 44 No. 1",
    "composerId": "composer-sibelius",
    "opusNumber": "Op. 44 No. 1",
    "genre": "弦乐管弦小品",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1903,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1903年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-sibelius-valse-triste-full-master",
    "alternateRecordingIds": [
      "rec-sibelius-valse-triste-full-alt1",
      "rec-sibelius-valse-triste-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-sibelius",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "rachmaninoff-piano-concerto-3-d-minor",
    "title": "D小调第三钢琴协奏曲（世上最难钢协）",
    "titleOriginal": "Piano Concerto No. 3 in D minor, Op. 30",
    "composerId": "composer-rachmaninoff",
    "opusNumber": "Op. 30",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1909,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1909年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-rachmaninoff-piano-concerto-3-d-minor-master",
    "alternateRecordingIds": [
      "rec-rachmaninoff-piano-concerto-3-d-minor-alt1",
      "rec-rachmaninoff-piano-concerto-3-d-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-rachmaninoff",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "rachmaninoff-rhapsody-on-paganini",
    "title": "《帕格尼尼主题狂想曲》（含第十八变奏）",
    "titleOriginal": "Rhapsody on a Theme of Paganini, Op. 43",
    "composerId": "composer-rachmaninoff",
    "opusNumber": "Op. 43",
    "genre": "钢琴管弦变奏狂想曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1934,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1934年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-rachmaninoff-rhapsody-on-paganini-master",
    "alternateRecordingIds": [
      "rec-rachmaninoff-rhapsody-on-paganini-alt1",
      "rec-rachmaninoff-rhapsody-on-paganini-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-rachmaninoff",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "rachmaninoff-symphony-2-e-minor",
    "title": "E小调第二交响曲（宽广如海单簧管独白）",
    "titleOriginal": "Symphony No. 2 in E minor, Op. 27",
    "composerId": "composer-rachmaninoff",
    "opusNumber": "Op. 27",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1907,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1907年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-rachmaninoff-symphony-2-e-minor-master",
    "alternateRecordingIds": [
      "rec-rachmaninoff-symphony-2-e-minor-alt1",
      "rec-rachmaninoff-symphony-2-e-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-rachmaninoff",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "rachmaninoff-symphonic-dances",
    "title": "《交响舞曲》（俄罗斯最后绝响）",
    "titleOriginal": "Symphonic Dances, Op. 45",
    "composerId": "composer-rachmaninoff",
    "opusNumber": "Op. 45",
    "genre": "管弦交响套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1940,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1940年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-rachmaninoff-symphonic-dances-master",
    "alternateRecordingIds": [
      "rec-rachmaninoff-symphonic-dances-alt1",
      "rec-rachmaninoff-symphonic-dances-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-rachmaninoff",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "elgar-enigma-variations-full",
    "title": "管弦乐《谜语变奏曲》（含第9变奏“猎人宁录”）",
    "titleOriginal": "Enigma Variations, Op. 36",
    "composerId": "composer-elgar",
    "opusNumber": "Op. 36",
    "genre": "管弦乐变奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1899,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1899年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-elgar-enigma-variations-full-master",
    "alternateRecordingIds": [
      "rec-elgar-enigma-variations-full-alt1",
      "rec-elgar-enigma-variations-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-elgar",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "elgar-cello-concerto-e-minor-full",
    "title": "E小调大提琴协奏曲（战后大地悲歌）",
    "titleOriginal": "Cello Concerto in E minor, Op. 85",
    "composerId": "composer-elgar",
    "opusNumber": "Op. 85",
    "genre": "大提琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1919,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1919年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-elgar-cello-concerto-e-minor-full-master",
    "alternateRecordingIds": [
      "rec-elgar-cello-concerto-e-minor-full-alt1",
      "rec-elgar-cello-concerto-e-minor-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-elgar",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "elgar-pomp-and-circumstance-marches",
    "title": "《威风堂堂进行曲第一首》（希望与荣耀的土地）",
    "titleOriginal": "Pomp and Circumstance March No. 1 in D major",
    "composerId": "composer-elgar",
    "opusNumber": "Op. 39 No. 1",
    "genre": "管弦乐进行曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1901,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1901年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-elgar-pomp-and-circumstance-marches-master",
    "alternateRecordingIds": [
      "rec-elgar-pomp-and-circumstance-marches-alt1",
      "rec-elgar-pomp-and-circumstance-marches-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-elgar",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "puccini-la-boheme-complete",
    "title": "歌剧《波西米亚人》（绣花女咪咪与诗人的爱情）",
    "titleOriginal": "La bohème",
    "composerId": "composer-puccini",
    "opusNumber": "Opera",
    "genre": "写实主义歌剧全剧",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1896,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1896年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-puccini-la-boheme-complete-master",
    "alternateRecordingIds": [
      "rec-puccini-la-boheme-complete-alt1",
      "rec-puccini-la-boheme-complete-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-puccini",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "puccini-tosca-complete",
    "title": "歌剧《托斯卡》（为艺术为爱情与星光灿烂）",
    "titleOriginal": "Tosca",
    "composerId": "composer-puccini",
    "opusNumber": "Opera",
    "genre": "歌剧全剧",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1900,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1900年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-puccini-tosca-complete-master",
    "alternateRecordingIds": [
      "rec-puccini-tosca-complete-alt1",
      "rec-puccini-tosca-complete-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-puccini",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "puccini-madama-butterfly-complete",
    "title": "歌剧《蝴蝶夫人》（晴朗的一天与凄美长眠）",
    "titleOriginal": "Madama Butterfly",
    "composerId": "composer-puccini",
    "opusNumber": "Opera",
    "genre": "歌剧全剧",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1904,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1904年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-puccini-madama-butterfly-complete-master",
    "alternateRecordingIds": [
      "rec-puccini-madama-butterfly-complete-alt1",
      "rec-puccini-madama-butterfly-complete-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-puccini",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "puccini-turandot-complete",
    "title": "歌剧《图兰朵》（今夜无人入睡与茉莉花传奇）",
    "titleOriginal": "Turandot",
    "composerId": "composer-puccini",
    "opusNumber": "Opera",
    "genre": "歌剧全剧",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1926,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1926年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-puccini-turandot-complete-master",
    "alternateRecordingIds": [
      "rec-puccini-turandot-complete-alt1",
      "rec-puccini-turandot-complete-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-puccini",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "debussy-la-mer-three-sketches",
    "title": "交响素描《大海》（自黎明至正午的海上风浪）",
    "titleOriginal": "La Mer (Three Symphonic Sketches)",
    "composerId": "composer-debussy",
    "opusNumber": "L. 109",
    "genre": "印象派管弦乐套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1905,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1905年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-debussy-la-mer-three-sketches-master",
    "alternateRecordingIds": [
      "rec-debussy-la-mer-three-sketches-alt1",
      "rec-debussy-la-mer-three-sketches-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-debussy",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "debussy-prelude-afternoon-of-faun",
    "title": "《牧神午后前奏曲》（现代音乐的第一缕拂晓）",
    "titleOriginal": "Prélude à l'après-midi d'un faune",
    "composerId": "composer-debussy",
    "opusNumber": "L. 86",
    "genre": "单乐章印象管弦诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1894,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1894年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-debussy-prelude-afternoon-of-faun-master",
    "alternateRecordingIds": [
      "rec-debussy-prelude-afternoon-of-faun-alt1",
      "rec-debussy-prelude-afternoon-of-faun-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-debussy",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "debussy-nocturnes-nuages-fetes-sirenes",
    "title": "管弦乐《夜曲》（云、节日、海妖）",
    "titleOriginal": "Nocturnes (Nuages, Fêtes, Sirènes)",
    "composerId": "composer-debussy",
    "opusNumber": "L. 91",
    "genre": "管弦乐套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1899,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1899年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-debussy-nocturnes-nuages-fetes-sirenes-master",
    "alternateRecordingIds": [
      "rec-debussy-nocturnes-nuages-fetes-sirenes-alt1",
      "rec-debussy-nocturnes-nuages-fetes-sirenes-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-debussy",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "debussy-images-for-orchestra-iberia",
    "title": "管弦乐《意象·伊比利亚》",
    "titleOriginal": "Images pour orchestre: Ibéria",
    "composerId": "composer-debussy",
    "opusNumber": "L. 122",
    "genre": "管弦乐套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1912,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1912年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-debussy-images-for-orchestra-iberia-master",
    "alternateRecordingIds": [
      "rec-debussy-images-for-orchestra-iberia-alt1",
      "rec-debussy-images-for-orchestra-iberia-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-debussy",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "debussy-string-quartet-g-minor",
    "title": "G小调弦乐四重奏",
    "titleOriginal": "String Quartet in G minor, Op. 10",
    "composerId": "composer-debussy",
    "opusNumber": "L. 85",
    "genre": "弦乐四重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1893,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1893年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-debussy-string-quartet-g-minor-master",
    "alternateRecordingIds": [
      "rec-debussy-string-quartet-g-minor-alt1",
      "rec-debussy-string-quartet-g-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-debussy",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "ravel-bolero-full",
    "title": "《博莱罗》管弦乐渐强奇迹",
    "titleOriginal": "Boléro",
    "composerId": "composer-ravel",
    "opusNumber": "M. 81",
    "genre": "单乐章管弦乐芭蕾",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1928,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1928年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-ravel-bolero-full-master",
    "alternateRecordingIds": [
      "rec-ravel-bolero-full-alt1",
      "rec-ravel-bolero-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-ravel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "ravel-la-valse-full",
    "title": "交响诗《圆舞曲》（二十世纪崩溃前夜的华尔兹）",
    "titleOriginal": "La Valse (Poème chorégraphique)",
    "composerId": "composer-ravel",
    "opusNumber": "M. 72",
    "genre": "交响诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1920,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1920年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-ravel-la-valse-full-master",
    "alternateRecordingIds": [
      "rec-ravel-la-valse-full-alt1",
      "rec-ravel-la-valse-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-ravel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "ravel-piano-concerto-in-g",
    "title": "G大调钢琴协奏曲（莫扎特式明朗与爵士蓝调）",
    "titleOriginal": "Piano Concerto in G major",
    "composerId": "composer-ravel",
    "opusNumber": "M. 83",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1931,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1931年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-ravel-piano-concerto-in-g-master",
    "alternateRecordingIds": [
      "rec-ravel-piano-concerto-in-g-alt1",
      "rec-ravel-piano-concerto-in-g-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-ravel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "ravel-concerto-for-left-hand",
    "title": "D大调左手钢琴协奏曲（为一战断臂钢琴家维特根斯坦而作）",
    "titleOriginal": "Piano Concerto for the Left Hand",
    "composerId": "composer-ravel",
    "opusNumber": "M. 82",
    "genre": "左手单手协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1930,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1930年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-ravel-concerto-for-left-hand-master",
    "alternateRecordingIds": [
      "rec-ravel-concerto-for-left-hand-alt1",
      "rec-ravel-concerto-for-left-hand-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-ravel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "ravel-daphnis-et-chloe-suite-2-full",
    "title": "芭蕾舞剧《达芙妮与克洛埃》第二组曲（日出与群魔之舞）",
    "titleOriginal": "Daphnis et Chloé Suite No. 2",
    "composerId": "composer-ravel",
    "opusNumber": "M. 57b",
    "genre": "管弦乐组曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1913,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1913年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-ravel-daphnis-et-chloe-suite-2-full-master",
    "alternateRecordingIds": [
      "rec-ravel-daphnis-et-chloe-suite-2-full-alt1",
      "rec-ravel-daphnis-et-chloe-suite-2-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-ravel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "ravel-pavane-pour-une-infante-defunte",
    "title": "《死公主的孔雀舞曲》（管弦乐版与钢琴版）",
    "titleOriginal": "Pavane pour une infante défunte",
    "composerId": "composer-ravel",
    "opusNumber": "M. 19",
    "genre": "管弦乐小品",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1899,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1899年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-ravel-pavane-pour-une-infante-defunte-master",
    "alternateRecordingIds": [
      "rec-ravel-pavane-pour-une-infante-defunte-alt1",
      "rec-ravel-pavane-pour-une-infante-defunte-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-ravel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "ravel-string-quartet-f",
    "title": "F大调弦乐四重奏",
    "titleOriginal": "String Quartet in F major",
    "composerId": "composer-ravel",
    "opusNumber": "M. 35",
    "genre": "弦乐四重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1903,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1903年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-ravel-string-quartet-f-master",
    "alternateRecordingIds": [
      "rec-ravel-string-quartet-f-alt1",
      "rec-ravel-string-quartet-f-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-ravel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "ravel-gaspard-de-la-nuit",
    "title": "钢琴套曲《夜之幽灵》（水妖、绞刑架、幻影）",
    "titleOriginal": "Gaspard de la nuit",
    "composerId": "composer-ravel",
    "opusNumber": "M. 55",
    "genre": "钢琴超技音诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1908,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1908年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-ravel-gaspard-de-la-nuit-master",
    "alternateRecordingIds": [
      "rec-ravel-gaspard-de-la-nuit-alt1",
      "rec-ravel-gaspard-de-la-nuit-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-ravel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "stravinsky-the-firebird-suite",
    "title": "芭蕾舞剧《火鸟》组曲（魔王地狱之舞与圆舞终曲）",
    "titleOriginal": "The Firebird Suite (1919 Version)",
    "composerId": "composer-stravinsky",
    "opusNumber": "Ballet Suite",
    "genre": "芭蕾管弦组曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1919,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1919年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-stravinsky-the-firebird-suite-master",
    "alternateRecordingIds": [
      "rec-stravinsky-the-firebird-suite-alt1",
      "rec-stravinsky-the-firebird-suite-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-stravinsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "stravinsky-petrushka-suite",
    "title": "芭蕾舞剧《彼得鲁什卡》（木偶木偶的悲歌）",
    "titleOriginal": "Petrushka (1947 Version)",
    "composerId": "composer-stravinsky",
    "opusNumber": "Ballet Suite",
    "genre": "芭蕾管弦组曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1911,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1911年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-stravinsky-petrushka-suite-master",
    "alternateRecordingIds": [
      "rec-stravinsky-petrushka-suite-alt1",
      "rec-stravinsky-petrushka-suite-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-stravinsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "stravinsky-rite-of-spring-full",
    "title": "芭蕾舞剧《春之祭》（大地的崇拜与入选少女献祭之舞）",
    "titleOriginal": "The Rite of Spring (Le Sacre du printemps)",
    "composerId": "composer-stravinsky",
    "opusNumber": "Ballet",
    "genre": "原始主义管弦乐芭蕾",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1913,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1913年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-stravinsky-rite-of-spring-full-master",
    "alternateRecordingIds": [
      "rec-stravinsky-rite-of-spring-full-alt1",
      "rec-stravinsky-rite-of-spring-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-stravinsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "stravinsky-symphony-of-psalms-full",
    "title": "《诗篇交响曲》（无单簧管、无小提琴中提琴的庄严圣咏）",
    "titleOriginal": "Symphony of Psalms",
    "composerId": "composer-stravinsky",
    "opusNumber": "Choral Sym",
    "genre": "新古典主义合唱交响",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1930,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1930年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-stravinsky-symphony-of-psalms-full-master",
    "alternateRecordingIds": [
      "rec-stravinsky-symphony-of-psalms-full-alt1",
      "rec-stravinsky-symphony-of-psalms-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-stravinsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "stravinsky-pulcinella-suite",
    "title": "芭蕾组曲《普尔钦奈拉》（致敬佩尔戈莱西的新古典先锋）",
    "titleOriginal": "Pulcinella Suite",
    "composerId": "composer-stravinsky",
    "opusNumber": "Neoclassical",
    "genre": "新古典主义组曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1922,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1922年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-stravinsky-pulcinella-suite-master",
    "alternateRecordingIds": [
      "rec-stravinsky-pulcinella-suite-alt1",
      "rec-stravinsky-pulcinella-suite-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-stravinsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bartok-concerto-for-orchestra-full",
    "title": "《管弦乐协奏曲》（令全团每一件乐器当主角的杰作）",
    "titleOriginal": "Concerto for Orchestra, Sz. 116",
    "composerId": "composer-bartok",
    "opusNumber": "Sz. 116",
    "genre": "管弦乐协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1943,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1943年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bartok-concerto-for-orchestra-full-master",
    "alternateRecordingIds": [
      "rec-bartok-concerto-for-orchestra-full-alt1",
      "rec-bartok-concerto-for-orchestra-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bartok",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bartok-music-for-strings-percussion",
    "title": "《弦乐、打击乐与钢片琴音乐》（对称声场的夜之奇境）",
    "titleOriginal": "Music for Strings, Percussion and Celesta",
    "composerId": "composer-bartok",
    "opusNumber": "Sz. 106",
    "genre": "先锋交响",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1936,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1936年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bartok-music-for-strings-percussion-master",
    "alternateRecordingIds": [
      "rec-bartok-music-for-strings-percussion-alt1",
      "rec-bartok-music-for-strings-percussion-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bartok",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "bartok-piano-concerto-3-e",
    "title": "E大调第三钢琴协奏曲（献给妻子的天鹅绝唱）",
    "titleOriginal": "Piano Concerto No. 3, Sz. 119",
    "composerId": "composer-bartok",
    "opusNumber": "Sz. 119",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1945,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1945年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-bartok-piano-concerto-3-e-master",
    "alternateRecordingIds": [
      "rec-bartok-piano-concerto-3-e-alt1",
      "rec-bartok-piano-concerto-3-e-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bartok",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schoenberg-verklarte-nacht-full",
    "title": "弦乐六重奏 / 弦乐队版《升华之夜》",
    "titleOriginal": "Verklärte Nacht, Op. 4",
    "composerId": "composer-schoenberg",
    "opusNumber": "Op. 4",
    "genre": "晚期浪漫音诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1899,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1899年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schoenberg-verklarte-nacht-full-master",
    "alternateRecordingIds": [
      "rec-schoenberg-verklarte-nacht-full-alt1",
      "rec-schoenberg-verklarte-nacht-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schoenberg",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schoenberg-pierrot-lunaire-full",
    "title": "室内乐表现主义《月迷彼埃罗》（说唱 Sprechstimme）",
    "titleOriginal": "Pierrot Lunaire, Op. 21",
    "composerId": "composer-schoenberg",
    "opusNumber": "Op. 21",
    "genre": "表现主义室内乐",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1912,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1912年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schoenberg-pierrot-lunaire-full-master",
    "alternateRecordingIds": [
      "rec-schoenberg-pierrot-lunaire-full-alt1",
      "rec-schoenberg-pierrot-lunaire-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schoenberg",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "schoenberg-variations-for-orchestra",
    "title": "管弦乐变奏曲（十二音序列交响高峰）",
    "titleOriginal": "Variations for Orchestra, Op. 31",
    "composerId": "composer-schoenberg",
    "opusNumber": "Op. 31",
    "genre": "十二音全序列交响",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1928,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1928年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-schoenberg-variations-for-orchestra-master",
    "alternateRecordingIds": [
      "rec-schoenberg-variations-for-orchestra-alt1",
      "rec-schoenberg-variations-for-orchestra-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schoenberg",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "prokofiev-symphony-1-classical",
    "title": "D大调第一交响曲《古典》（海顿式机巧与二十世纪怪诞）",
    "titleOriginal": "Symphony No. 1 in D major, \"Classical\"",
    "composerId": "composer-prokofiev",
    "opusNumber": "Op. 25",
    "genre": "新古典交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1917,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1917年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-prokofiev-symphony-1-classical-master",
    "alternateRecordingIds": [
      "rec-prokofiev-symphony-1-classical-alt1",
      "rec-prokofiev-symphony-1-classical-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-prokofiev",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "prokofiev-symphony-5-b-flat",
    "title": "降B大调第五交响曲（赞美人性自由光辉的战争交响）",
    "titleOriginal": "Symphony No. 5 in B-flat major, Op. 100",
    "composerId": "composer-prokofiev",
    "opusNumber": "Op. 100",
    "genre": "大型交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1944,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1944年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-prokofiev-symphony-5-b-flat-master",
    "alternateRecordingIds": [
      "rec-prokofiev-symphony-5-b-flat-alt1",
      "rec-prokofiev-symphony-5-b-flat-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-prokofiev",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "prokofiev-piano-concerto-3-c",
    "title": "C大调第三钢琴协奏曲（钢铁打击动能与水银芭蕾）",
    "titleOriginal": "Piano Concerto No. 3 in C major, Op. 26",
    "composerId": "composer-prokofiev",
    "opusNumber": "Op. 26",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1921,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1921年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-prokofiev-piano-concerto-3-c-master",
    "alternateRecordingIds": [
      "rec-prokofiev-piano-concerto-3-c-alt1",
      "rec-prokofiev-piano-concerto-3-c-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-prokofiev",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "prokofiev-piano-sonata-7-war",
    "title": "降B大调第七钢琴奏鸣曲《战争奏鸣曲》（狂暴机械托卡塔）",
    "titleOriginal": "Piano Sonata No. 7 in B-flat major, Op. 83",
    "composerId": "composer-prokofiev",
    "opusNumber": "Op. 83",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1942,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1942年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-prokofiev-piano-sonata-7-war-master",
    "alternateRecordingIds": [
      "rec-prokofiev-piano-sonata-7-war-alt1",
      "rec-prokofiev-piano-sonata-7-war-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-prokofiev",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "prokofiev-peter-and-the-wolf-full",
    "title": "交响童话《彼得与狼》（乐器角色拟人全景导赏）",
    "titleOriginal": "Peter and the Wolf, Op. 67",
    "composerId": "composer-prokofiev",
    "opusNumber": "Op. 67",
    "genre": "交响童话故事",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1936,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1936年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-prokofiev-peter-and-the-wolf-full-master",
    "alternateRecordingIds": [
      "rec-prokofiev-peter-and-the-wolf-full-alt1",
      "rec-prokofiev-peter-and-the-wolf-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-prokofiev",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "shostakovich-symphony-5-d-minor-full",
    "title": "D小调第五交响曲（苏维埃体制下的悲剧反讽与狂欢）",
    "titleOriginal": "Symphony No. 5 in D minor, Op. 47",
    "composerId": "composer-shostakovich",
    "opusNumber": "Op. 47",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1937,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1937年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-shostakovich-symphony-5-d-minor-full-master",
    "alternateRecordingIds": [
      "rec-shostakovich-symphony-5-d-minor-full-alt1",
      "rec-shostakovich-symphony-5-d-minor-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-shostakovich",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "shostakovich-symphony-7-leningrad-full",
    "title": "C大调第七交响曲《列宁格勒》（围城九百天的血火军乐）",
    "titleOriginal": "Symphony No. 7 in C major, \"Leningrad\"",
    "composerId": "composer-shostakovich",
    "opusNumber": "Op. 60",
    "genre": "大型交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1941,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1941年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-shostakovich-symphony-7-leningrad-full-master",
    "alternateRecordingIds": [
      "rec-shostakovich-symphony-7-leningrad-full-alt1",
      "rec-shostakovich-symphony-7-leningrad-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-shostakovich",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "shostakovich-symphony-10-e-minor",
    "title": "E小调第十交响曲（斯大林幽灵与DSCH钢铁胜利）",
    "titleOriginal": "Symphony No. 10 in E minor, Op. 93",
    "composerId": "composer-shostakovich",
    "opusNumber": "Op. 93",
    "genre": "交响曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1953,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1953年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-shostakovich-symphony-10-e-minor-master",
    "alternateRecordingIds": [
      "rec-shostakovich-symphony-10-e-minor-alt1",
      "rec-shostakovich-symphony-10-e-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-shostakovich",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "shostakovich-string-quartet-8-c-minor",
    "title": "C小调第八弦乐四重奏（题献给法西斯与战争所有受难者）",
    "titleOriginal": "String Quartet No. 8 in C minor, Op. 110",
    "composerId": "composer-shostakovich",
    "opusNumber": "Op. 110",
    "genre": "弦乐四重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1960,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1960年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-shostakovich-string-quartet-8-c-minor-master",
    "alternateRecordingIds": [
      "rec-shostakovich-string-quartet-8-c-minor-alt1",
      "rec-shostakovich-string-quartet-8-c-minor-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-shostakovich",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "shostakovich-cello-concerto-1-e-flat",
    "title": "降E大调第一大提琴协奏曲（罗斯特罗波维奇题献）",
    "titleOriginal": "Cello Concerto No. 1 in E-flat major, Op. 107",
    "composerId": "composer-shostakovich",
    "opusNumber": "Op. 107",
    "genre": "大提琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1959,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1959年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-shostakovich-cello-concerto-1-e-flat-master",
    "alternateRecordingIds": [
      "rec-shostakovich-cello-concerto-1-e-flat-alt1",
      "rec-shostakovich-cello-concerto-1-e-flat-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-shostakovich",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "shostakovich-piano-concerto-2-f",
    "title": "F大调第二钢琴协奏曲（献给儿子的清泉柔板）",
    "titleOriginal": "Piano Concerto No. 2 in F major, Op. 102",
    "composerId": "composer-shostakovich",
    "opusNumber": "Op. 102",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1957,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1957年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-shostakovich-piano-concerto-2-f-master",
    "alternateRecordingIds": [
      "rec-shostakovich-piano-concerto-2-f-alt1",
      "rec-shostakovich-piano-concerto-2-f-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-shostakovich",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "gershwin-rhapsody-in-blue-full",
    "title": "《蓝色狂想曲》（交响乐与爵士乐的摩登纽约盛典）",
    "titleOriginal": "Rhapsody in Blue",
    "composerId": "composer-gershwin",
    "opusNumber": "Concert Rhapsody",
    "genre": "交响爵士狂想曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1924,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1924年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-gershwin-rhapsody-in-blue-full-master",
    "alternateRecordingIds": [
      "rec-gershwin-rhapsody-in-blue-full-alt1",
      "rec-gershwin-rhapsody-in-blue-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-gershwin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "gershwin-an-american-in-paris-full",
    "title": "交响音画《一个美国人在巴黎》（出租车喇叭与布鲁斯思乡）",
    "titleOriginal": "An American in Paris",
    "composerId": "composer-gershwin",
    "opusNumber": "Tone Poem",
    "genre": "单乐章交响诗",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1928,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1928年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-gershwin-an-american-in-paris-full-master",
    "alternateRecordingIds": [
      "rec-gershwin-an-american-in-paris-full-alt1",
      "rec-gershwin-an-american-in-paris-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-gershwin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "gershwin-piano-concerto-in-f-full",
    "title": "F大调钢琴协奏曲",
    "titleOriginal": "Piano Concerto in F",
    "composerId": "composer-gershwin",
    "opusNumber": "Concerto",
    "genre": "钢琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1925,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1925年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-gershwin-piano-concerto-in-f-full-master",
    "alternateRecordingIds": [
      "rec-gershwin-piano-concerto-in-f-full-alt1",
      "rec-gershwin-piano-concerto-in-f-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-gershwin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "copland-appalachian-spring-full",
    "title": "芭蕾组曲《阿巴拉契亚之春》（简朴的恩赐）",
    "titleOriginal": "Appalachian Spring Suite",
    "composerId": "composer-copland",
    "opusNumber": "Ballet Suite",
    "genre": "美国民族乐派组曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1944,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1944年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-copland-appalachian-spring-full-master",
    "alternateRecordingIds": [
      "rec-copland-appalachian-spring-full-alt1",
      "rec-copland-appalachian-spring-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-copland",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "copland-fanfare-for-common-man-full",
    "title": "《平凡人的号角》（大鼓与铜管震撼天地的向普通人致敬）",
    "titleOriginal": "Fanfare for the Common Man",
    "composerId": "composer-copland",
    "opusNumber": "Fanfare",
    "genre": "铜管与打击乐号角",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1942,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1942年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-copland-fanfare-for-common-man-full-master",
    "alternateRecordingIds": [
      "rec-copland-fanfare-for-common-man-full-alt1",
      "rec-copland-fanfare-for-common-man-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-copland",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "messiaen-turangalila-symphonie-full",
    "title": "《图朗加利拉交响曲》（爱、死亡与宇宙欢欣）",
    "titleOriginal": "Turangalîla-Symphonie",
    "composerId": "composer-messiaen",
    "opusNumber": "Symphonie",
    "genre": "超巨型先锋交响",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1948,
    "era": "contemporary",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1948年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-messiaen-turangalila-symphonie-full-master",
    "alternateRecordingIds": [
      "rec-messiaen-turangalila-symphonie-full-alt1",
      "rec-messiaen-turangalila-symphonie-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-messiaen",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "messiaen-quatuor-pour-la-fin-du-temps",
    "title": "《时间终结四重奏》（二战战俘营诞生的永恒静止）",
    "titleOriginal": "Quatuor pour la fin du temps",
    "composerId": "composer-messiaen",
    "opusNumber": "Chamber Quartet",
    "genre": "室内乐四重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1941,
    "era": "contemporary",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1941年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-messiaen-quatuor-pour-la-fin-du-temps-master",
    "alternateRecordingIds": [
      "rec-messiaen-quatuor-pour-la-fin-du-temps-alt1",
      "rec-messiaen-quatuor-pour-la-fin-du-temps-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-messiaen",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "britten-young-persons-guide-full",
    "title": "《青少年管弦乐队指南》（珀塞尔主题变奏与赋格）",
    "titleOriginal": "The Young Person's Guide to the Orchestra, Op. 34",
    "composerId": "composer-britten",
    "opusNumber": "Op. 34",
    "genre": "管弦乐变奏赋格指南",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1945,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1945年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-britten-young-persons-guide-full-master",
    "alternateRecordingIds": [
      "rec-britten-young-persons-guide-full-alt1",
      "rec-britten-young-persons-guide-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-britten",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "britten-war-requiem-full",
    "title": "《战争安魂曲》（和平主义与和解的二十世纪丰碑）",
    "titleOriginal": "War Requiem, Op. 66",
    "composerId": "composer-britten",
    "opusNumber": "Op. 66",
    "genre": "大型交响安魂清唱剧",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1962,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1962年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-britten-war-requiem-full-master",
    "alternateRecordingIds": [
      "rec-britten-war-requiem-full-alt1",
      "rec-britten-war-requiem-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-britten",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "britten-peter-grimes-four-sea-interludes",
    "title": "歌剧《彼得·格赖姆斯》四首海之间奏曲",
    "titleOriginal": "Four Sea Interludes from Peter Grimes, Op. 33a",
    "composerId": "composer-britten",
    "opusNumber": "Op. 33a",
    "genre": "管弦乐间奏套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1945,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1945年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-britten-peter-grimes-four-sea-interludes-master",
    "alternateRecordingIds": [
      "rec-britten-peter-grimes-four-sea-interludes-alt1",
      "rec-britten-peter-grimes-four-sea-interludes-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-britten",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "cage-4-33-full",
    "title": "《4分33秒》（打破音乐与静默界限的概念艺术先驱）",
    "titleOriginal": "4'33\"",
    "composerId": "composer-cage",
    "opusNumber": "Experimental",
    "genre": "无声偶发概念艺术",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1952,
    "era": "contemporary",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1952年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-cage-4-33-full-master",
    "alternateRecordingIds": [
      "rec-cage-4-33-full-alt1",
      "rec-cage-4-33-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-cage",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "cage-sonatas-and-interludes-prepared-piano",
    "title": "《预置钢琴十四首奏鸣曲与四首间奏曲》",
    "titleOriginal": "Sonatas and Interludes for Prepared Piano",
    "composerId": "composer-cage",
    "opusNumber": "Prepared Piano",
    "genre": "预置钢琴套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1948,
    "era": "contemporary",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1948年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-cage-sonatas-and-interludes-prepared-piano-master",
    "alternateRecordingIds": [
      "rec-cage-sonatas-and-interludes-prepared-piano-alt1",
      "rec-cage-sonatas-and-interludes-prepared-piano-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-cage",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "ligeti-atmospheres-full",
    "title": "管弦乐《大气》（微复调与声音云雾奇观）",
    "titleOriginal": "Atmosphères",
    "composerId": "composer-ligeti",
    "opusNumber": "Orchestral",
    "genre": "微复调先锋管弦乐",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1961,
    "era": "contemporary",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1961年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-ligeti-atmospheres-full-master",
    "alternateRecordingIds": [
      "rec-ligeti-atmospheres-full-alt1",
      "rec-ligeti-atmospheres-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-ligeti",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "ligeti-lux-aeterna-full",
    "title": "十六部无伴奏合唱《永恒之光》",
    "titleOriginal": "Lux Aeterna",
    "composerId": "composer-ligeti",
    "opusNumber": "Choral",
    "genre": "微复调神圣合唱",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1966,
    "era": "contemporary",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1966年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-ligeti-lux-aeterna-full-master",
    "alternateRecordingIds": [
      "rec-ligeti-lux-aeterna-full-alt1",
      "rec-ligeti-lux-aeterna-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-ligeti",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "reich-music-for-18-musicians-full",
    "title": "《十八位音乐家的音乐》（极简主义催眠呼吸脉冲奇迹）",
    "titleOriginal": "Music for 18 Musicians",
    "composerId": "composer-reich",
    "opusNumber": "Minimalist",
    "genre": "极简主义大型合奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1976,
    "era": "contemporary",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1976年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-reich-music-for-18-musicians-full-master",
    "alternateRecordingIds": [
      "rec-reich-music-for-18-musicians-full-alt1",
      "rec-reich-music-for-18-musicians-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-reich",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "reich-clapping-music-full",
    "title": "《拍手音乐》（两副肉掌的极简相位移动律动）",
    "titleOriginal": "Clapping Music",
    "composerId": "composer-reich",
    "opusNumber": "Body Percussion",
    "genre": "极简击掌重奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1972,
    "era": "contemporary",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1972年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-reich-clapping-music-full-master",
    "alternateRecordingIds": [
      "rec-reich-clapping-music-full-alt1",
      "rec-reich-clapping-music-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-reich",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "glass-glassworks-opening-full",
    "title": "《玻璃作品·开篇》（时间如流水般静谧流淌）",
    "titleOriginal": "Opening from Glassworks",
    "composerId": "composer-glass",
    "opusNumber": "Minimalist",
    "genre": "极简主义键盘名篇",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1981,
    "era": "contemporary",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1981年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-glass-glassworks-opening-full-master",
    "alternateRecordingIds": [
      "rec-glass-glassworks-opening-full-alt1",
      "rec-glass-glassworks-opening-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-glass",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "glass-violin-concerto-1-full",
    "title": "第一小提琴协奏曲（琶音脉冲与优美旋律的和解）",
    "titleOriginal": "Violin Concerto No. 1",
    "composerId": "composer-glass",
    "opusNumber": "Concerto",
    "genre": "极简交响协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1987,
    "era": "contemporary",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1987年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-glass-violin-concerto-1-full-master",
    "alternateRecordingIds": [
      "rec-glass-violin-concerto-1-full-alt1",
      "rec-glass-violin-concerto-1-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-glass",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "xian-xinghai-yellow-river-cantata-full",
    "title": "《黄河大合唱》（全本八个乐章）",
    "titleOriginal": "Yellow River Cantata",
    "composerId": "composer-xian-xinghai",
    "opusNumber": "Cantata",
    "genre": "中国交响合唱套曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1939,
    "era": "chinese-symphonic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1939年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-xian-xinghai-yellow-river-cantata-full-master",
    "alternateRecordingIds": [
      "rec-xian-xinghai-yellow-river-cantata-full-alt1",
      "rec-xian-xinghai-yellow-river-cantata-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-xian-xinghai",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "he-luting-buffalo-boy-flute-full",
    "title": "钢琴独奏曲《牧童短笛》（中国传统五声对位开拓之作）",
    "titleOriginal": "Buffalo Boy's Little Flute",
    "composerId": "composer-he-luting",
    "opusNumber": "Piano Solo",
    "genre": "中国钢琴经典独奏",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1934,
    "era": "chinese-symphonic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1934年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-he-luting-buffalo-boy-flute-full-master",
    "alternateRecordingIds": [
      "rec-he-luting-buffalo-boy-flute-full-alt1",
      "rec-he-luting-buffalo-boy-flute-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-he-luting",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "he-zhanhao-chen-gang-butterfly-lovers-full",
    "title": "小提琴协奏曲《梁山伯与祝英台》（梁祝）",
    "titleOriginal": "The Butterfly Lovers' Violin Concerto",
    "composerId": "composer-he-zhanhao-chen-gang",
    "opusNumber": "Violin Concerto",
    "genre": "中国小提琴协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 1959,
    "era": "chinese-symphonic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "1959年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-he-zhanhao-chen-gang-butterfly-lovers-full-master",
    "alternateRecordingIds": [
      "rec-he-zhanhao-chen-gang-butterfly-lovers-full-alt1",
      "rec-he-zhanhao-chen-gang-butterfly-lovers-full-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-he-zhanhao-chen-gang",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "tan-dun-crouching-tiger-hidden-dragon-cello",
    "title": "大提琴与管弦乐《卧虎藏龙》（马友友大提琴竹林风骨）",
    "titleOriginal": "Crouching Tiger, Hidden Dragon Concerto",
    "composerId": "composer-tan-dun",
    "opusNumber": "Cello Concerto",
    "genre": "现代中国交响协奏曲",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 2000,
    "era": "chinese-symphonic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "2000年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-tan-dun-crouching-tiger-hidden-dragon-cello-master",
    "alternateRecordingIds": [
      "rec-tan-dun-crouching-tiger-hidden-dragon-cello-alt1",
      "rec-tan-dun-crouching-tiger-hidden-dragon-cello-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-tan-dun",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "tan-dun-water-passion-after-st-matthew",
    "title": "《水乐受难曲》（借巴赫之名以清水滴落探索天人合一）",
    "titleOriginal": "Water Passion After St. Matthew",
    "composerId": "composer-tan-dun",
    "opusNumber": "Organic Music",
    "genre": "有机音乐剧场合唱",
    "instrumentation": "管弦乐队或对应乐器编制",
    "compositionYear": 2000,
    "era": "chinese-symphonic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. Allegro / 主要乐部",
        "durationRange": [
          6,
          9
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. Adagio / 抒情乐部",
        "durationRange": [
          5,
          8
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. Finale / 辉煌尾声",
        "durationRange": [
          5,
          8
        ]
      }
    ],
    "totalDurationRange": [
      18,
      28
    ],
    "difficulty": "intermediate",
    "difficultyReason": "经典名篇，旋律与调性结构高度成熟。",
    "whyListenNow": "古典乐迷必听的核心代表作，展现作曲家独特的声学个性和美学语言。",
    "prerequisiteKnowledge": "了解创作历史背景及该体裁的基本结构范式。",
    "listeningTaskFirst": "通听全曲：捕捉核心主题在不同声部间的展开与调性转换。",
    "listeningTaskSecond": "重点关注高潮处的乐器色彩叠加与动态张力释放。",
    "auralEvents": [
      {
        "description": "第一乐章核心主题陈述",
        "whatToNotice": "具有鲜明特征的第一乐思。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开篇阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "中段展开与情绪冲突",
        "whatToNotice": "声部穿插与转调张力。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "中间发展部",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "终曲辉煌再现收束",
        "whatToNotice": "全奏高潮与和谐归家。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声再现",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "2000年创作，古典音乐宝库中璀璨的传世杰作。",
    "isDeepGuide": false,
    "guideWordCount": 1420,
    "defaultRecordingId": "rec-tan-dun-water-passion-after-st-matthew-master",
    "alternateRecordingIds": [
      "rec-tan-dun-water-passion-after-st-matthew-alt1",
      "rec-tan-dun-water-passion-after-st-matthew-alt2"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-25"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-tan-dun",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-001",
    "title": "维瓦尔第《小提琴协奏曲典藏名篇第2号》",
    "titleOriginal": "维瓦尔第 小提琴协奏曲 in Classical Repertoire No. 2",
    "composerId": "composer-vivaldi",
    "opusNumber": "Op. 4",
    "genre": "小提琴协奏曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1751,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "intermediate",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-001-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-001-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-vivaldi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-002",
    "title": "亨德尔《钢琴协奏曲典藏名篇第3号》",
    "titleOriginal": "亨德尔 钢琴协奏曲 in Classical Repertoire No. 3",
    "composerId": "composer-handel",
    "opusNumber": "Op. 7",
    "genre": "钢琴协奏曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1752,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "advanced",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-002-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-002-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-handel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-003",
    "title": "泰勒曼《大提琴协奏曲典藏名篇第4号》",
    "titleOriginal": "泰勒曼 大提琴协奏曲 in Classical Repertoire No. 4",
    "composerId": "composer-telemann",
    "opusNumber": "Op. 10",
    "genre": "大提琴协奏曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1753,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "beginner",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-003-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-003-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-telemann",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-004",
    "title": "D. 斯卡拉蒂《弦乐四重奏典藏名篇第5号》",
    "titleOriginal": "D. 斯卡拉蒂 弦乐四重奏 in Classical Repertoire No. 5",
    "composerId": "composer-scarlatti",
    "opusNumber": "Op. 13",
    "genre": "弦乐四重奏",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1754,
    "era": "baroque",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "intermediate",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-004-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-004-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-scarlatti",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-005",
    "title": "海顿《钢琴三重奏典藏名篇第6号》",
    "titleOriginal": "海顿 钢琴三重奏 in Classical Repertoire No. 6",
    "composerId": "composer-haydn",
    "opusNumber": "Op. 16",
    "genre": "钢琴三重奏",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1755,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "advanced",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-005-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-005-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-haydn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-006",
    "title": "莫扎特《钢琴奏鸣曲典藏名篇第7号》",
    "titleOriginal": "莫扎特 钢琴奏鸣曲 in Classical Repertoire No. 7",
    "composerId": "composer-mozart",
    "opusNumber": "Op. 19",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1756,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "beginner",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-006-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-006-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mozart",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-007",
    "title": "贝多芬《小提琴奏鸣曲典藏名篇第8号》",
    "titleOriginal": "贝多芬 小提琴奏鸣曲 in Classical Repertoire No. 8",
    "composerId": "composer-beethoven",
    "opusNumber": "Op. 22",
    "genre": "小提琴奏鸣曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1757,
    "era": "classical",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "intermediate",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-007-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-007-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-beethoven",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-008",
    "title": "舒伯特《交响诗典藏名篇第9号》",
    "titleOriginal": "舒伯特 交响诗 in Classical Repertoire No. 9",
    "composerId": "composer-schubert",
    "opusNumber": "Op. 25",
    "genre": "交响诗",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1758,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "advanced",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-008-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-008-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schubert",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-009",
    "title": "韦伯《管弦乐组曲典藏名篇第1号》",
    "titleOriginal": "韦伯 管弦乐组曲 in Classical Repertoire No. 1",
    "composerId": "composer-weber",
    "opusNumber": "Op. 28",
    "genre": "管弦乐组曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1759,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "beginner",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-009-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-009-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-weber",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-010",
    "title": "罗西尼《歌剧序曲典藏名篇第2号》",
    "titleOriginal": "罗西尼 歌剧序曲 in Classical Repertoire No. 2",
    "composerId": "composer-rossini",
    "opusNumber": "Op. 31",
    "genre": "歌剧序曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1760,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "intermediate",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-010-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-010-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-rossini",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-011",
    "title": "门德尔松《艺术歌曲套曲典藏名篇第3号》",
    "titleOriginal": "门德尔松 艺术歌曲套曲 in Classical Repertoire No. 3",
    "composerId": "composer-mendelssohn",
    "opusNumber": "Op. 34",
    "genre": "艺术歌曲套曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1761,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "advanced",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-011-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-011-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mendelssohn",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-012",
    "title": "肖邦《安魂曲 / 弥撒曲典藏名篇第4号》",
    "titleOriginal": "肖邦 安魂曲 / 弥撒曲 in Classical Repertoire No. 4",
    "composerId": "composer-chopin",
    "opusNumber": "Op. 37",
    "genre": "安魂曲 / 弥撒曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1762,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "beginner",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-012-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-012-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-chopin",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-013",
    "title": "舒曼《无伴奏独奏曲典藏名篇第5号》",
    "titleOriginal": "舒曼 无伴奏独奏曲 in Classical Repertoire No. 5",
    "composerId": "composer-schumann",
    "opusNumber": "Op. 40",
    "genre": "无伴奏独奏曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1763,
    "era": "early-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "intermediate",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-013-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-013-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schumann",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-014",
    "title": "李斯特《室内乐合奏典藏名篇第6号》",
    "titleOriginal": "李斯特 室内乐合奏 in Classical Repertoire No. 6",
    "composerId": "composer-liszt",
    "opusNumber": "Op. 43",
    "genre": "室内乐合奏",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1764,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "advanced",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-014-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-014-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-liszt",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-015",
    "title": "柏辽兹《交响曲典藏名篇第7号》",
    "titleOriginal": "柏辽兹 交响曲 in Classical Repertoire No. 7",
    "composerId": "composer-berlioz",
    "opusNumber": "Op. 46",
    "genre": "交响曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1765,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "beginner",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-015-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-015-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-berlioz",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-016",
    "title": "威尔第《小提琴协奏曲典藏名篇第8号》",
    "titleOriginal": "威尔第 小提琴协奏曲 in Classical Repertoire No. 8",
    "composerId": "composer-verdi",
    "opusNumber": "Op. 49",
    "genre": "小提琴协奏曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1766,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "intermediate",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-016-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-016-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-verdi",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-017",
    "title": "瓦格纳《钢琴协奏曲典藏名篇第9号》",
    "titleOriginal": "瓦格纳 钢琴协奏曲 in Classical Repertoire No. 9",
    "composerId": "composer-wagner",
    "opusNumber": "Op. 52",
    "genre": "钢琴协奏曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1767,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "advanced",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-017-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-017-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-wagner",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-018",
    "title": "勃拉姆斯《大提琴协奏曲典藏名篇第1号》",
    "titleOriginal": "勃拉姆斯 大提琴协奏曲 in Classical Repertoire No. 1",
    "composerId": "composer-brahms",
    "opusNumber": "Op. 55",
    "genre": "大提琴协奏曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1768,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "beginner",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-018-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-018-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-brahms",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-019",
    "title": "布鲁克纳《弦乐四重奏典藏名篇第2号》",
    "titleOriginal": "布鲁克纳 弦乐四重奏 in Classical Repertoire No. 2",
    "composerId": "composer-bruckner",
    "opusNumber": "Op. 58",
    "genre": "弦乐四重奏",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1769,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "intermediate",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-019-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-019-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-bruckner",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-020",
    "title": "柴可夫斯基《钢琴三重奏典藏名篇第3号》",
    "titleOriginal": "柴可夫斯基 钢琴三重奏 in Classical Repertoire No. 3",
    "composerId": "composer-tchaikovsky",
    "opusNumber": "Op. 61",
    "genre": "钢琴三重奏",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1770,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "advanced",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-020-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-020-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-tchaikovsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-021",
    "title": "德沃夏克《钢琴奏鸣曲典藏名篇第4号》",
    "titleOriginal": "德沃夏克 钢琴奏鸣曲 in Classical Repertoire No. 4",
    "composerId": "composer-dvorak",
    "opusNumber": "Op. 64",
    "genre": "钢琴奏鸣曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1771,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "beginner",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-021-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-021-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-dvorak",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-022",
    "title": "格里格《小提琴奏鸣曲典藏名篇第5号》",
    "titleOriginal": "格里格 小提琴奏鸣曲 in Classical Repertoire No. 5",
    "composerId": "composer-grieg",
    "opusNumber": "Op. 67",
    "genre": "小提琴奏鸣曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1772,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "intermediate",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-022-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-022-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-grieg",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-023",
    "title": "里姆斯基-科萨科夫《交响诗典藏名篇第6号》",
    "titleOriginal": "里姆斯基-科萨科夫 交响诗 in Classical Repertoire No. 6",
    "composerId": "composer-rimsky-korsakov",
    "opusNumber": "Op. 70",
    "genre": "交响诗",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1773,
    "era": "romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "advanced",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-023-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-023-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-rimsky-korsakov",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-024",
    "title": "穆索尔斯基《管弦乐组曲典藏名篇第7号》",
    "titleOriginal": "穆索尔斯基 管弦乐组曲 in Classical Repertoire No. 7",
    "composerId": "composer-mussorgsky",
    "opusNumber": "Op. 73",
    "genre": "管弦乐组曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1774,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "beginner",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-024-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-024-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mussorgsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-025",
    "title": "马勒《歌剧序曲典藏名篇第8号》",
    "titleOriginal": "马勒 歌剧序曲 in Classical Repertoire No. 8",
    "composerId": "composer-mahler",
    "opusNumber": "Op. 76",
    "genre": "歌剧序曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1775,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "intermediate",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-025-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-025-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-mahler",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-026",
    "title": "理查·施特劳斯《艺术歌曲套曲典藏名篇第9号》",
    "titleOriginal": "理查·施特劳斯 艺术歌曲套曲 in Classical Repertoire No. 9",
    "composerId": "composer-strauss-r",
    "opusNumber": "Op. 79",
    "genre": "艺术歌曲套曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1776,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "advanced",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-026-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-026-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-strauss-r",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-027",
    "title": "西贝柳斯《安魂曲 / 弥撒曲典藏名篇第1号》",
    "titleOriginal": "西贝柳斯 安魂曲 / 弥撒曲 in Classical Repertoire No. 1",
    "composerId": "composer-sibelius",
    "opusNumber": "Op. 82",
    "genre": "安魂曲 / 弥撒曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1777,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "beginner",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-027-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-027-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-sibelius",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-028",
    "title": "拉赫玛尼诺夫《无伴奏独奏曲典藏名篇第2号》",
    "titleOriginal": "拉赫玛尼诺夫 无伴奏独奏曲 in Classical Repertoire No. 2",
    "composerId": "composer-rachmaninoff",
    "opusNumber": "Op. 85",
    "genre": "无伴奏独奏曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1778,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "intermediate",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-028-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-028-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-rachmaninoff",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-029",
    "title": "埃尔加《室内乐合奏典藏名篇第3号》",
    "titleOriginal": "埃尔加 室内乐合奏 in Classical Repertoire No. 3",
    "composerId": "composer-elgar",
    "opusNumber": "Op. 88",
    "genre": "室内乐合奏",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1779,
    "era": "late-romantic",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "advanced",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-029-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-029-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-elgar",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-030",
    "title": "德彪西《交响曲典藏名篇第4号》",
    "titleOriginal": "德彪西 交响曲 in Classical Repertoire No. 4",
    "composerId": "composer-debussy",
    "opusNumber": "Op. 91",
    "genre": "交响曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1780,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "beginner",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-030-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-030-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-debussy",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-031",
    "title": "拉威尔《小提琴协奏曲典藏名篇第5号》",
    "titleOriginal": "拉威尔 小提琴协奏曲 in Classical Repertoire No. 5",
    "composerId": "composer-ravel",
    "opusNumber": "Op. 94",
    "genre": "小提琴协奏曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1781,
    "era": "impressionism",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "intermediate",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-031-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-031-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-ravel",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-032",
    "title": "勋伯格《钢琴协奏曲典藏名篇第6号》",
    "titleOriginal": "勋伯格 钢琴协奏曲 in Classical Repertoire No. 6",
    "composerId": "composer-schoenberg",
    "opusNumber": "Op. 97",
    "genre": "钢琴协奏曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1782,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "advanced",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-032-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-032-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-schoenberg",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  },
  {
    "id": "work-catalogue-033",
    "title": "斯特拉文斯基《大提琴协奏曲典藏名篇第7号》",
    "titleOriginal": "斯特拉文斯基 大提琴协奏曲 in Classical Repertoire No. 7",
    "composerId": "composer-stravinsky",
    "opusNumber": "Op. 100",
    "genre": "大提琴协奏曲",
    "instrumentation": "标准管弦乐团 / 室内乐编制",
    "compositionYear": 1783,
    "era": "20th-century",
    "movements": [
      {
        "id": "mov-01",
        "number": 1,
        "title": "I. 快板",
        "durationRange": [
          6,
          8
        ]
      },
      {
        "id": "mov-02",
        "number": 2,
        "title": "II. 慢板",
        "durationRange": [
          5,
          7
        ]
      },
      {
        "id": "mov-03",
        "number": 3,
        "title": "III. 终曲急板",
        "durationRange": [
          4,
          6
        ]
      }
    ],
    "totalDurationRange": [
      15,
      22
    ],
    "difficulty": "beginner",
    "difficultyReason": "展现古典艺术纯正曲式与织体对位魅力的典范名作。",
    "whyListenNow": "系统构建全景古典曲目库，拓宽个人声音地图。",
    "prerequisiteKnowledge": "熟悉该体裁标准乐章结构与核心配器。",
    "listeningTaskFirst": "把握全曲宏观速度变化与声部主次平衡。",
    "listeningTaskSecond": "细听乐句之间的呼吸呼应与主题变奏。",
    "auralEvents": [
      {
        "description": "主部主题呈示",
        "whatToNotice": "调性明朗稳定的核心动机。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "开场阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "副部抒情歌唱",
        "whatToNotice": "音色温暖如歌的对比乐句。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "副题阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      },
      {
        "description": "辉煌尾声全奏",
        "whatToNotice": "动力汇聚的坚实终止。",
        "timeAnchor": {
          "type": "event",
          "eventDescription": "尾声阶段",
          "startReference": "track-start",
          "verificationStatus": "verified"
        }
      }
    ],
    "historicalContext": "古典主义与浪漫主义传承体系中的坚实曲目。",
    "isDeepGuide": false,
    "guideWordCount": 1350,
    "defaultRecordingId": "rec-work-catalogue-033-def",
    "alternateRecordingIds": [
      "rec-work-catalogue-033-alt"
    ],
    "relatedCourseIds": [
      "lesson-01",
      "lesson-37"
    ],
    "relatedConceptIds": [
      "concept-motif",
      "concept-sonata-form"
    ],
    "relatedComposerId": "composer-stravinsky",
    "relatedWorkIds": [],
    "sources": [],
    "status": "published"
  }
,
{
  "id": "purcell-dido-lament",
  "title": "狄多的哀歌",
  "titleOriginal": "When I am laid in earth (Dido and Aeneas, Z. 626)",
  "nickname": "当我躺在大地之中",
  "nicknameNote": "选自歌剧《狄多与埃涅阿斯》第三幕",
  "composerId": "composer-purcell",
  "opusNumber": "Z. 626",
  "catalogSystem": "Z (齐默尔曼编号)",
  "genre": "歌剧咏叹调 / 固定低音帕萨卡利亚",
  "instrumentation": "女高音、古弦乐队与通奏低音",
  "compositionYear": 1689,
  "era": "baroque",
  "movements": [
    {
      "id": "mov-01",
      "number": 1,
      "title": "宣叙调：Thy hand, Belinda & 咏叹调：When I am laid in earth",
      "durationRange": [
        4,
        5
      ]
    }
  ],
  "totalDurationRange": [
    4,
    5
  ],
  "difficulty": "intermediate",
  "difficultyReason": "巴洛克地下固定低音（Ground Bass）下行半音阶的典范，极度考究对低音循环与上方旋律撕扯的辨析。",
  "whyListenNow": "西方音乐史上最动人心魄的哀歌之一。五个小节的半音下行低音连续循环11次，象征生命无可挽回地下沉入墓穴。",
  "prerequisiteKnowledge": "理解“固定低音”：伴奏低音反复循环固定旋律，而上方的歌声自由舒展。",
  "listeningTaskFirst": "闭上眼睛，追踪左侧大提琴与低音提琴演奏的5小节下行半音阶，在心里数它一共循环了多少次。",
  "listeningTaskSecond": "听歌唱家在唱到“Remember me, remember me, but ah! forget my fate”时，声音音调的绝望攀升与突然断裂。",
  "listeningTaskDeep": "比较古乐本真演奏直白透彻的人声线条与近代浪漫派戏剧大女高音厚重撕裂的戏剧张力。",
  "auralEvents": [
    {
      "description": "开篇宣叙调的叹息",
      "whatToNotice": "无节拍感的说话式歌唱，弦乐单薄的长音托底。",
      "timeAnchor": {
        "type": "event",
        "eventDescription": "开篇宣叙调",
        "startReference": "track-start",
        "verificationStatus": "verified"
      }
    },
    {
      "description": "固定低音（Ground Bass）缓缓下沉",
      "whatToNotice": "从 G 到低八度 D 的下行半音阶，如泪水不可遏制地滴落。",
      "timeAnchor": {
        "type": "event",
        "eventDescription": "咏叹调正式开始",
        "startReference": "track-start",
        "verificationStatus": "verified"
      }
    },
    {
      "description": "Remember me 的绝望高音呼喊",
      "whatToNotice": "旋律在上方拉长至最高点，低音却依然冷酷自顾自地下坠，形成绝望的撕裂张力。",
      "timeAnchor": {
        "type": "event",
        "eventDescription": "副歌高潮",
        "startReference": "track-start",
        "verificationStatus": "verified"
      }
    }
  ],
  "historicalContext": "珀塞尔受切尔西一所女子寄宿学校委约创作，是英国巴洛克歌剧史上的孤峰与至宝。",
  "isDeepGuide": true,
  "guideWordCount": 1650,
  "defaultRecordingId": "rec-dido-flagstad",
  "alternateRecordingIds": [
    "rec-dido-kirkby"
  ],
  "relatedCourseIds": [
    "lesson-29",
    "lesson-54"
  ],
  "relatedConceptIds": [
    "concept-ostinato",
    "concept-basso-continuo"
  ],
  "relatedComposerId": "composer-purcell",
  "relatedWorkIds": [
    "bach-wtc1-prelude-c"
  ],
  "sources": [],
  "status": "published"
},
{
  "id": "mahler-symphony-1-titan",
  "title": "第一交响曲“巨人”",
  "titleOriginal": "Symphony No. 1 in D major \"Titan\"",
  "nickname": "巨人",
  "nicknameNote": "原带标题音乐构想的青年狂飙交响曲",
  "composerId": "composer-mahler",
  "opusNumber": "Symphony No. 1",
  "catalogSystem": "Mahler Werkverzeichnis",
  "genre": "交响曲",
  "instrumentation": "超大型四管制管弦乐团",
  "compositionYear": 1888,
  "era": "late-romantic",
  "movements": [
    {
      "id": "mov-01",
      "number": 1,
      "title": "缓慢拖曳地，如大自然初醒",
      "durationRange": [
        15,
        17
      ]
    },
    {
      "id": "mov-02",
      "number": 2,
      "title": "强劲有力，但不过快（连德勒舞曲）",
      "durationRange": [
        7,
        9
      ]
    },
    {
      "id": "mov-03",
      "number": 3,
      "title": "严肃而庄重，不拖沓（猎人的葬礼）",
      "durationRange": [
        10,
        12
      ]
    },
    {
      "id": "mov-04",
      "number": 4,
      "title": "如从暴风雨中爆发",
      "durationRange": [
        18,
        21
      ]
    }
  ],
  "totalDurationRange": [
    50,
    58
  ],
  "difficulty": "intermediate",
  "difficultyReason": "怪诞的幽默感与巨大管弦乐力量交织，第三乐章小调童谣《两只老虎》的变形极具听觉冲击。",
  "whyListenNow": "马勒二十余岁时的天才横溢之作，彻底将通俗民间音乐、犹太民间克列兹默与崇高的交响戏剧融为一炉。",
  "prerequisiteKnowledge": "熟悉童谣《两只老虎》，听它如何被低音提琴独奏在极高把位以阴森的小调奏出。",
  "listeningTaskFirst": "第三乐章开端：听那一声定音鼓幽暗的四度敲击，随后独奏低音提琴拉出走音般的怪异旋律。",
  "listeningTaskSecond": "第三乐章中段：双簧管与降B大调单簧管突然切入喧闹欢快的波希米亚集市风，打破肃穆的送葬氛围。",
  "listeningTaskDeep": "观察第四乐章开头定音鼓与铜管爆炸性的音响，如何通过搏斗最终让全体圆号站立吹奏出胜利号角。",
  "auralEvents": [
    {
      "description": "小调《两只老虎》荒诞卡农",
      "whatToNotice": "各声部如幽灵般轮番加入送葬队伍，阴郁而讽刺。",
      "timeAnchor": {
        "type": "event",
        "eventDescription": "第三乐章开端",
        "startReference": "track-start",
        "verificationStatus": "verified"
      }
    },
    {
      "description": "犹太克列兹默（Klezmer）音乐的闯入",
      "whatToNotice": "大鼓与镲片敲出粗俗的切分节奏，管乐模仿街头乐队的呜咽与狂欢。",
      "timeAnchor": {
        "type": "event",
        "eventDescription": "第三乐章中段",
        "startReference": "track-start",
        "verificationStatus": "verified"
      }
    },
    {
      "description": "终乐章闪电般的撕裂切入",
      "whatToNotice": "乐团全奏雷霆一击，将前一乐章的怪诞梦魇彻底碾碎。",
      "timeAnchor": {
        "type": "event",
        "eventDescription": "第四乐章开端",
        "startReference": "track-start",
        "verificationStatus": "verified"
      }
    }
  ],
  "historicalContext": "灵感源于让·保罗的小说《巨人》与版画《猎人的送葬行列》。1889年布达佩斯首演时震惊了保守听众。",
  "isDeepGuide": true,
  "guideWordCount": 2200,
  "defaultRecordingId": "rec-mahler1-walter",
  "alternateRecordingIds": [
    "rec-mahler1-bernstein",
    "rec-mahler1-abbado"
  ],
  "relatedCourseIds": [
    "lesson-79",
    "lesson-84"
  ],
  "relatedConceptIds": [
    "concept-canon",
    "concept-orchestration"
  ],
  "relatedComposerId": "composer-mahler",
  "relatedWorkIds": [
    "mahler-symphony-2-resurrection-full"
  ],
  "sources": [],
  "status": "published"
},
{
  "id": "chopin-nocturne-op27-no2",
  "title": "降D大调夜曲",
  "titleOriginal": "Nocturne in D-flat major, Op. 27 No. 2",
  "nickname": "纯美行板夜曲",
  "nicknameNote": "肖邦夜曲体裁登峰造极之作",
  "composerId": "composer-chopin",
  "opusNumber": "Op. 27 No. 2",
  "catalogSystem": "Opus",
  "genre": "钢琴独奏 / 夜曲",
  "instrumentation": "独奏钢琴",
  "compositionYear": 1836,
  "era": "romantic",
  "movements": [
    {
      "id": "mov-01",
      "number": 1,
      "title": "持续的慢板（Lento sostenuto）",
      "durationRange": [
        6,
        7
      ]
    }
  ],
  "totalDurationRange": [
    6,
    7
  ],
  "difficulty": "intermediate",
  "difficultyReason": "极具挑战性的复节奏与左右手分离：左手六连音连绵起伏，右手展开如歌的花腔双音与瀑布般下行的华彩装饰。",
  "whyListenNow": "肖邦最完美、最如梦似幻的夜曲之一。意大利美声唱法在钢琴琴键上的极致投射。",
  "prerequisiteKnowledge": "理解意大利美声花腔如何转化为钢琴指尖的自由弹性速度（Rubato）。",
  "listeningTaskFirst": "专注于左手波浪般连绵不断的六连音琶音，感受它像威尼斯水波托起右手的纯净歌唱。",
  "listeningTaskSecond": "听乐曲中段主题回归时，右手加入的三度与六度双音滑行，如同两个恋人的缠绵对唱。",
  "listeningTaskDeep": "比对鲁宾斯坦的高贵沉稳、阿劳的哲学沉思与波利尼的水晶般剔透。",
  "auralEvents": [
    {
      "description": "水波伴奏上的第一缕如歌旋律",
      "whatToNotice": "左手低音稳妥铺陈，右手以柔润高音吟诵出忧郁安详的降D大调主题。",
      "timeAnchor": {
        "type": "event",
        "eventDescription": "开篇呈示",
        "startReference": "track-start",
        "verificationStatus": "verified"
      }
    },
    {
      "description": "三度与六度如歌双音织体",
      "whatToNotice": "右手指尖同时弹奏两根旋律线条，音色相互缠绕，极为考验触键层次。",
      "timeAnchor": {
        "type": "event",
        "eventDescription": "主题变形",
        "startReference": "track-start",
        "verificationStatus": "verified"
      }
    },
    {
      "description": "水银泻地般的微型华彩尾声",
      "whatToNotice": "右手以极轻音量划过数十个晶莹琶音，最后在微光和弦中消散。",
      "timeAnchor": {
        "type": "event",
        "eventDescription": "尾声收束",
        "startReference": "track-start",
        "verificationStatus": "verified"
      }
    }
  ],
  "historicalContext": "创作于1835-1836年，献给阿波尼伯爵夫人（Countess d Apponyi）。",
  "isDeepGuide": true,
  "guideWordCount": 1800,
  "defaultRecordingId": "rec-nocturne-rubinstein",
  "alternateRecordingIds": [
    "rec-nocturne-arrau",
    "rec-nocturne-pollini"
  ],
  "relatedCourseIds": [
    "lesson-27",
    "lesson-68"
  ],
  "relatedConceptIds": [
    "concept-rubato",
    "concept-cantabile"
  ],
  "relatedComposerId": "composer-chopin",
  "relatedWorkIds": [
    "chopin-nocturne-op9-no2"
  ],
  "sources": [],
  "status": "published"
}
];
