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
        description: 'PCFMD',
        amount: 25,
        details: '西格玛(PCFMD) 为爱发电赞助25元'
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
    {
        date: '2025-08-23',
        type: 'income',
        category: '赞助打赏',
        description: '777FLL',
        amount: 20,
        details: '777FLL 为爱发电赞助20元'
    },
        {
        date: '2025-08-23',
        type: 'income',
        category: '赞助打赏',
        description: 'エレン · イェーガー',
        amount: 15,
        details: 'エレン · イェーガー 为爱发电赞助15元'
    },
    {
        date: '2025-09-12',
        type: 'income',
        category: '赞助打赏',
        description: '蓝烛冻成了冰烛',
        amount: 200,
        details: '蓝烛冻成了冰烛 为SVChao豪掷200元'
    },
    {
        date: '2025-09-12',
        type: 'income',
        category: '赞助打赏',
        description: 'Tourbillion',
        amount: 8.8,
        details: 'Tourbillion 为SVChao充电8.8元'
    },
    {
        date: '2025-12-09',
        type: 'income',
        category: '赞助打赏',
        description: 'Achilles',
        amount: 30,
        details: 'Achilles 暖心打赏30元'
    },
    {
        date: '2025-12-09',
        type: 'income',
        category: '赞助打赏',
        description: '七海夜',
        amount: 6,
        details: '七海夜 为爱发电赞助6元'
    },
    {
        date: '2026-01-30',
        type: 'income',
        category: '赞助打赏',
        description: 'GunterW',
        amount: 200,
        details: 'GunterW 为爱发电赞助200元'
    },
    {
        date: '2026-02-07',
        type: 'income',
        category: '赞助打赏',
        description: 'GunterW',
        amount: 100,
        details: 'GunterW 为爱发电赞助100元'
    },
    {
        date: '2026-02-07',
        type: 'income',
        category: '赞助打赏',
        description: 'x',
        amount: 50,
        details: 'x 为爱发电赞助50元'
    },
    {
        date: '2026-02-07',
        type: 'income',
        category: '赞助打赏',
        description: 'エレン · イェーガー',
        amount: 10,
        details: 'エレン · イェーガー 为爱发电赞助10元'
    },
    {
        date: '2026-02-09',
        type: 'income',
        category: '赞助打赏',
        description: 'ONE_THE',
        amount: 12,
        details: 'ONE_THE(一游四方) 为爱发电赞助12元'
    },
    {
        date: '2026-02-10',
        type: 'income',
        category: '赞助打赏',
        description: 'space',
        amount: 30,
        details: 'space 为爱发电赞助30元'
    },
    
    
    // 支出记录
    {
        date: '2024-04-17',
        type: 'expense',
        category: '设备维护',
        description: '硬盘',
        amount: -519,
        details: 'NVMe SSD 1TB'
    },
    {
        date: '2024-07-31',
        type: 'expense',
        category: '设备维护',
        description: '服务器',
        amount: -750,
        details: '准系统服务器采购'
    },
    {
        date: '2024-07-31',
        type: 'expense',
        category: '设备维护',
        description: '显卡',
        amount: -68,
        details: '服务器亮机卡'
    },
    {
        date: '2024-08-16',
        type: 'expense',
        category: '设备维护',
        description: '硬盘',
        amount: -15.59,
        details: '16G傲腾启动盘'
    },
    {
        date: '2024-08-29',
        type: 'expense',
        category: '设备维护',
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
        category: '设备维护',
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
        details: '4TB希捷机械硬盘'
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
        category: '设备维护',
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
        date: '2025-09-09',
        type: 'expense',
        category: '设备维护',
        description: '内存',
        amount: -120,
        details: '16G内存条'
    },
    {
        date: '2025-09-19',
        type: 'expense',
        category: '运营成本',
        description: '云服务器',
        amount: -30,
        details: '云计算平台充值'
    },
    {
        date: '2025-09-30',
        type: 'expense',
        category: '运营成本',
        description: '电网费',
        amount: -180,
        details: '25年第3季度电力和网络费用'
    },
    {
        date: '2025-10-10',
        type: 'expense',
        category: '设备维护',
        description: '硬盘',
        amount: -817,
        details: 'KOXIA固态硬盘1TB*2'
    },
    {
        date: '2025-10-21',
        type: 'expense',
        category: '运营成本',
        description: '云服务器',
        amount: -70,
        details: '云计算平台充值'
    },
    {
        date: '2025-12-31',
        type: 'expense',
        category: '运营成本',
        description: '电网费',
        amount: -180,
        details: '25年第4季度电力和网络费用'
    },
    {
        date: '2026-02-05',
        type: 'expense',
        category: '运营成本',
        description: '云服务器',
        amount: -30,
        details: '云计算平台充值'
    }
];

// 分类统计
const categoryStats = {
    income: {
        '赞助打赏': 1261.8,
        '算力出租': 59
    },
    expense: {
        '设备维护': -3539.52,
        '运营成本': -1254.8
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
    { month: '2024-10', income: 0, expense: -85.93 },
    { month: '2024-11', income: 59, expense: -470 },
    { month: '2024-12', income: 0, expense: -180 },
    { month: '2025-03', income: 160, expense: -399 },
    { month: '2025-04', income: 0, expense: -18 },
    { month: '2025-06', income: 0, expense: -180 },
    { month: '2025-08', income: 169, expense: -475.8 },
    { month: '2025-09', income: 208.8, expense: -330 },
    { month: '2025-10', income: 0, expense: -817 },
    { month: '2025-12', income: 36, expense: -180 },
    { month: '2026-01', income: 200, expense: 0 },
    { month: '2026-02', income: 202, expense: -30 }
];

// 导出数据
window.transactionData = transactionData;
window.categoryStats = categoryStats;
window.monthlyTrends = monthlyTrends;






