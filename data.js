// 芙蕾德莉卡活动营收数据
const transactionData = [
    // 收入记录
    {
        date: '2024-07',
        type: 'income',
        category: '打赏',
        description: '赞助',
        amount: 300,
        details: 'XXX'
    },
    
    // 支出记录
    {
        date: '2024-04',
        type: 'expense',
        category: '运营成本',
        description: '硬盘',
        amount: -519,
        details: 'NVMe SSD 1TB'
    },
    {
        date: '2024-07',
        type: 'expense',
        category: '运营成本',
        description: '服务器',
        amount: -1300,
        details: '准系统服务器采购'
    },
    {
        date: '2024-07',
        type: 'expense',
        category: '运营成本',
        description: '显卡',
        amount: -68,
        details: '服务器亮机卡'
    },
    {
        date: '2024-08',
        type: 'expense',
        category: '运营成本',
        description: '硬盘',
        amount: -15.59,
        details: '16G傲腾启动盘'
    },
    {
        date: '2024-08',
        type: 'expense',
        category: '运营成本',
        description: '内存',
        amount: -76,
        details: '8G内存条'
    },
    {
        date: '2024-10',
        type: 'expense',
        category: '运营成本',
        description: '视频采集卡',
        amount: -35.93,
        details: '服务器PiKVM采集卡'
    },
    {
        date: '2024-11',
        type: 'expense',
        category: '设备维护',
        description: '硬盘',
        amount: -470,
        details: '4TB希捷机械硬盘购买'
    },
    {
        date: '2025-03',
        type: 'expense',
        category: '运营成本',
        description: '内存',
        amount: -219,
        details: '16G内存条*2'
    },
    {
        date: '2025-08',
        type: 'expense',
        category: '设备维护',
        description: 'PDU',
        amount: -43.38,
        details: '远程管理插座'
    },
    {
        date: '2025-08',
        type: 'expense',
        category: '设备维护',
        description: '电源',
        amount: -405.62,
        details: '更换老电源'
    },

];

// 分类统计
const categoryStats = {
    income: {
        '赞助打赏': 405,
        '其他收入': 200
    },
    expense: {
        '设备维护': -919,
        '运营成本': -2233
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


