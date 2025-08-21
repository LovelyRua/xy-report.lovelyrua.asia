// 芙蕾德莉卡活动营收数据
const transactionData = [
    // 收入记录
    {
        date: '2024-11',
        type: 'income',
        category: '直播打赏',
        description: '首播',
        amount: 300,
        details: '5位舰长'
    },
    {
        date: '2024-12',
        type: 'income',
        category: '直播打赏',
        description: '在舰舰长',
        amount: 120,
        details: '2位舰长'
    },
    {
        date: '2025-1',
        type: 'income',
        category: '直播打赏',
        description: '1.5版本首播',
        amount: 210,
        details: '7位舰长'
    },
    {
        date: '2025-2',
        type: 'income',
        category: '直播打赏',
        description: '在舰舰长',
        amount: 120,
        details: '2位舰长'
    },
    {
        date: '2025-3',
        type: 'income',
        category: '直播打赏',
        description: '在舰舰长',
        amount: 60,
        details: '1位舰长'
    },
    {
        date: '2025-4',
        type: 'income',
        category: '直播打赏',
        description: '在舰舰长',
        amount: 60,
        details: '1位舰长'
    },
    {
        date: '2025-6',
        type: 'income',
        category: '直播打赏',
        description: '在舰舰长',
        amount: 120,
        details: '2位舰长'
    },
    {
        date: '2025-7',
        type: 'income',
        category: '直播打赏',
        description: '在舰舰长',
        amount: 180,
        details: '3位舰长'
    },
    {
        date: '2025-8',
        type: 'income',
        category: '直播打赏',
        description: '在舰舰长',
        amount: 420,
        details: '7位舰长'
    },
    {
        date: '2025-8',
        type: 'income',
        category: '直播打赏',
        description: '直播礼物',
        amount: 700,
        details: '开播至今，礼物约700元'
    },
    {
        date: '2025-7',
        type: 'income',
        category: '充电收入',
        description: '在舰舰长',
        amount: 72,
        details: '9位充电用户，最低2元，最高30，看不到具体的，只能估算'
    },
    
    // 支出记录
    {
        date: '2024-12',
        type: 'expense',
        category: '其他支出',
        description: '素材',
        amount: -420,
        details: '1.0形象vroid(3d)制作素材购买'
    },
    {
        date: '2024-12',
        type: 'expense',
        category: '其他支出',
        description: '舰礼',
        amount: 824,
        details: '舰礼 - 5瓶葡萄酒（bernkastel雷司令、莫斯卡托等）'
    },
    {
        date: '2025-01',
        type: 'expense',
        category: '其他支出',
        description: '舰礼',
        amount: 426,
        details: '舰礼 - 2瓶烈酒（帝王12年、轩尼诗xo小瓶装等）'
    },
    {
        date: '2025-1',
        type: 'expense',
        category: '约稿支出',
        description: '约稿',
        amount: -700,
        details: '1.5版本形象表情包'
    },
    {
        date: '2025-1',
        type: 'expense',
        category: '约稿支出',
        description: '约稿',
        amount: -5150,
        details: '1.5版本形象live2D+建模'
    },
    {
        date: '2025-02',
        type: 'expense',
        category: '比赛奖金',
        description: '芙芙杯1.0比赛奖金发放',
        amount: -345.33,
        details: '冠军168 亚军88 季军66元 殿军23.33元'
    },
    {
        date: '2025-05',
        type: 'expense',
        category: '比赛奖金',
        description: '芙芙杯2.0比赛奖金发放',
        amount: -345.33,
        details: '冠军168 亚军88 季军66元 殿军23.33元'
    },
    {
        date: '2025-02',
        type: 'expense',
        category: '约稿支出',
        description: '约稿',
        amount: -1100,
        details: '内容创作:包括2副组合页，3个头像，1立绘'
    },
    {
        date: '2025-01-30',
        type: 'expense',
        category: '运营成本',
        description: '封面制作',
        amount: -200,
        details: '投稿封面制作费用'
    },
    {
        date: '2025-08',
        type: 'expense',
        category: '约稿支出',
        description: '约稿',
        amount: -1200,
        details: 'live2d建模费用'
    },
    {
        date: '2025-08',
        type: 'expense',
        category: '约稿支出',
        description: '约稿',
        amount: -500,
        details: '2.0表情包约稿支出'
    },
    {
        date: '2025-06-01',
        type: 'expense',
        category: '约稿支出',
        description: '形象设计费用',
        amount: -2500,
        details: '形象设计'
    },
    {
        date: '2025-07-01',
        type: 'expense',
        category: '约稿支出',
        description: '形象live2d立绘',
        amount: -6900,
        details: 'live2d立绘制作'
    },
    {
        date: '2025-08-01',
        type: 'expense',
        category: '综合周边支出',
        description: '舰礼平均支出50元/人',
        amount: -1000,
        details: '开播至今，包括立牌、钥匙扣、色纸、手工信等制作物料成本和运损补发成本'
    }
];

// 分类统计
const categoryStats = {
    income: {
        '直播打赏': 405,
        '其他收入': 200
    },
    expense: {
        '约稿支出': -15100,
        '设备维护': -800,
        '运营成本': -200
    }
};

// 月度趋势数据
const monthlyTrends = [
    { month: '2024-12', income: 605, expense: 0 },
    { month: '2025-01', income: 0, expense: -1400 },
    { month: '2025-02', income: 0, expense: -2300 },
    { month: '2025-03', income: 0, expense: -3000 },
    { month: '2025-06', income: 0, expense: -2500 },
    { month: '2025-07', income: 0, expense: -6900 }
];

// 导出数据
window.transactionData = transactionData;
window.categoryStats = categoryStats;
window.monthlyTrends = monthlyTrends;
