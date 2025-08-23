// 咸鱼之家活动营收数据
const transactionData = [
    // 收入记录
    {
        date: '2024-03-05',
        type: 'income',
        category: '赞助打赏',
        description: 'CQC1442',
        amount: 50,
        details: 'CQC1442:"For minecraft" 赞助50元'
    },
    {
        date: '2024-04-20',
        type: 'income',
        category: '赞助打赏',
        description: 'Achilles',
        amount: 110,
        details: 'Achilles 硬盘助力110元'
    },
    {
        date: '2024-05-08',
        type: 'income',
        category: '赞助打赏',
        description: 'Fccgyh',
        amount: 126,
        details: 'Fccgyh 内存助力126元'
    },
    {
        date: '2024-11-02',
        type: 'income',
        category: '算力出租',
        description: 'eata233',
        amount: 59,
        details: '服务器算力出租'
    },
    {
        date: '2025-03-19',
        type: 'income',
        category: '赞助打赏',
        description: 'Creation_TV',
        amount: 160,
        details: 'Creation_TV 电量助力160元'
    },
    {
        date: '2025-08-09',
        type: 'income',
        category: '赞助打赏',
        description: 'Achilles',
        amount: 24,
        details: 'Achilles 加速节点助力24元'
    },
    {
        date: '2025-08-23',
        type: 'income',
        category: '赞助打赏',
        description: '西格玛',
        amount: 25,
        details: '西格玛 为爱发电赞助25元'
    },
    {
        date: '2025-08-23',
        type: 'income',
        category: '赞助打赏',
        description: '梅琳娜',
        amount: 35,
        details: '梅琳娜(jojo) 为爱发电赞助35元'
    },
    {
        date: '2025-08-23',
        type: 'income',
        category: '赞助打赏',
        description: 'sonnet',
        amount: 50,
        details: 'sonnet 为爱发电赞助50元'
    },
    
    // 支出记录
    {
        date: '2024-04-17',
        type: 'expense',
        category: '运营成本',
        description: '硬盘',
        amount: -519,
        details: 'NVMe SSD 1TB'
    },
    {
        date: '2024-07-31',
        type: 'expense',
        category: '运营成本',
        description: '服务器',
        amount: -750,
        details: '准系统服务器采购'
    },
    {
        date: '2024-07-31',
        type: 'expense',
        category: '运营成本',
        description: '显卡',
        amount: -68,
        details: '服务器亮机卡'
    },
    {
        date: '2024-08-16',
        type: 'expense',
        category: '运营成本',
        description: '硬盘',
        amount: -15.59,
        details: '16G傲腾启动盘'
    },
    {
        date: '2024-08-29',
        type: 'expense',
        category: '运营成本',
        description: '内存',
        amount: -76,
        details: '8G内存条'
    },
    {
        date: '2024-09-30',
        type: 'expense',
        category: '运营成本',
        description: '电网费',
        amount: -180,
        details: '24年第3季度电力和网络费用'
    },
    {
        date: '2024-10-01',
        type: 'expense',
        category: '运营成本',
        description: '视频采集卡',
        amount: -35.93,
        details: '服务器PiKVM采集卡'
    },
    {
        date: '2024-11-27',
        type: 'expense',
        category: '设备维护',
        description: '硬盘',
        amount: -470,
        details: '4TB希捷机械硬盘购买'
    },
    {
        date: '2024-12-31',
        type: 'expense',
        category: '运营成本',
        description: '电网费',
        amount: -180,
        details: '24年第4季度电力及网络费用'
    },
    {
        date: '2025-03-24',
        type: 'expense',
        category: '运营成本',
        description: '内存',
        amount: -219,
        details: '16G内存条*2'
    },
    {
        date: '2025-03-31',
        type: 'expense',
        category: '运营成本',
        description: '电网费',
        amount: -180,
        details: '25年第1季度电力和网络费用'
    },
    {
        date: '2025-04-05',
        type: 'expense',
        category: '运营成本',
        description: '云服务器',
        amount: -18,
        details: '加速节点'
    },
    {
        date: '2025-06-30',
        type: 'expense',
        category: '运营成本',
        description: '电网费',
        amount: -180,
        details: '25年第2季度电力和网络费用'
    },
    {
        date: '2025-08-04',
        type: 'expense',
        category: '设备维护',
        description: 'PDU',
        amount: -43.38,
        details: '远程管理插座'
    },
    {
        date: '2025-08-04',
        type: 'expense',
        category: '设备维护',
        description: '电源',
        amount: -405.62,
        details: '更换老电源'
    },
    {
        date: '2025-08-09',
        type: 'expense',
        category: '运营成本',
        description: '云服务器',
        amount: -26.8,
        details: '加速节点续费'
    },
    {
        date: '2025-09-30',
        type: 'expense',
        category: '运营成本',
        description: '电网费',
        amount: -180,
        details: '25年第3季度电力和网络费用'
    }

];

// 分类统计
const categoryStats = {
    income: {
        '赞助打赏': 580,
        '算力出租': 59
    },
    expense: {
        '设备维护': -919,
        '运营成本': -2448.32
    }
};

// 月度趋势数据
const monthlyTrends = [
    { month: '2024-03', income: 50, expense: 0 },
    { month: '2024-04', income: 110, expense: -519 },
    { month: '2024-05', income: 126, expense: 0 },
    { month: '2024-07', income: 0, expense: -818 },
    { month: '2024-08', income: 0, expense: -91.59 },
    { month: '2024-09', income: 0, expense: -180 },
    { month: '2024-10', income: 0, expense: -35.93 },
    { month: '2024-11', income: 59, expense: -470 },
    { month: '2024-12', income: 0, expense: -180 },
    { month: '2025-03', income: 160, expense: -399 },
    { month: '2025-04', income: 0, expense: -18 },
    { month: '2025-06', income: 0, expense: -180 },
    { month: '2025-08', income: 134, expense: -475.8 }
];

// 导出数据
window.transactionData = transactionData;
window.categoryStats = categoryStats;
window.monthlyTrends = monthlyTrends;









