// 咸鱼之家营收透明化页面交互逻辑

class RevenueTracker {
    constructor() {
        this.transactions = window.transactionData || [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.calculateStats();
        this.renderTransactions();
        this.createCharts();
        this.setupEventListeners();
        this.addAnimations();
    }

    // 计算统计数据
    calculateStats() {
        const totalIncome = this.transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        const totalExpense = this.transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + Math.abs(t.amount), 0);

        const netBalance = totalIncome - totalExpense;

        // 更新统计显示
        document.getElementById('total-income').textContent = `¥${totalIncome}`;
        document.getElementById('total-expense').textContent = `¥${totalExpense}`;
        document.getElementById('net-balance').textContent = `¥${netBalance}`;

        // 添加数字动画
        this.animateNumbers();
    }

    // 数字动画效果
    animateNumbers() {
        const elements = [
            document.getElementById('total-income'),
            document.getElementById('total-expense'),
            document.getElementById('net-balance')
        ];

        elements.forEach(element => {
            const finalValue = parseInt(element.textContent.replace('¥', ''));
            this.animateNumber(element, 0, finalValue, 1000);
        });
    }

    animateNumber(element, start, end, duration) {
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * progress);
            element.textContent = `¥${current}`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }

    // 渲染交易记录
    renderTransactions() {
        const timeline = document.getElementById('transactions-timeline');
        const filteredTransactions = this.getFilteredTransactions();
        
        timeline.innerHTML = '';

        filteredTransactions.forEach((transaction, index) => {
            const transactionElement = this.createTransactionElement(transaction, index);
            timeline.appendChild(transactionElement);
        });
    }

    // 创建交易记录元素
    createTransactionElement(transaction, index) {
        const element = document.createElement('div');
        element.className = `transaction-item ${transaction.type}`;
        element.style.animationDelay = `${index * 0.1}s`;

        const formattedDate = this.formatDate(transaction.date);
        const amountText = transaction.type === 'income' 
            ? `+¥${transaction.amount}` 
            : `-¥${Math.abs(transaction.amount)}`;

        element.innerHTML = `
            <div class="transaction-header">
                <span class="transaction-date">${formattedDate}</span>
                <span class="transaction-amount">${amountText}</span>
            </div>
            <div class="transaction-type">${transaction.category} - ${transaction.description}</div>
            <div class="transaction-description">${transaction.details}</div>
        `;

        return element;
    }

    // 格式化日期
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    }

    // 获取筛选后的交易记录
    getFilteredTransactions() {
        if (this.currentFilter === 'all') {
            return this.transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        return this.transactions
            .filter(t => t.type === this.currentFilter)
            .sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    // 创建图表
    createCharts() {
        this.createCategoryChart();
        this.createTrendChart();
    }

    // 创建分类统计图表
    createCategoryChart() {
        const ctx = document.getElementById('categoryChart').getContext('2d');
        
        const incomeData = window.categoryStats.income;
        const expenseData = window.categoryStats.expense;

        const labels = [...Object.keys(incomeData), ...Object.keys(expenseData)];
        const data = [...Object.values(incomeData), ...Object.values(expenseData)];
        const colors = [
            '#9370db', '#8a2be2', // 收入颜色
            '#ff6b9d', '#c44569', '#74b9ff' // 支出颜色
        ];

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    duration: 2000
                }
            }
        });
    }

    // 创建趋势图表
    createTrendChart() {
        const ctx = document.getElementById('trendChart').getContext('2d');
        const trends = window.monthlyTrends;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: trends.map(t => t.month),
                datasets: [
                    {
                        label: '收入',
                        data: trends.map(t => t.income),
                        borderColor: '#9370db',
                        backgroundColor: 'rgba(147, 112, 219, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: '支出',
                        data: trends.map(t => Math.abs(t.expense)),
                        borderColor: '#ff6b9d',
                        backgroundColor: 'rgba(255, 107, 157, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 2,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1600,
                        grid: {
                            color: 'rgba(147, 112, 219, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '¥' + value.toLocaleString();
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(147, 112, 219, 0.1)'
                        }
                    }
                },
                animation: {
                    duration: 2000
                }
            }
        });
    }

    // 设置事件监听器
    setupEventListeners() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // 移除所有活动状态
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // 添加当前活动状态
                e.target.classList.add('active');
                
                // 更新筛选
                this.currentFilter = e.target.dataset.filter;
                this.renderTransactions();
            });
        });

        // 添加滚动动画
        this.setupScrollAnimations();
    }

    // 设置滚动动画
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // 观察所有卡片元素
        document.querySelectorAll('.stat-card, .chart-card, .transaction-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // 添加额外动画效果
    addAnimations() {
        // 为统计卡片添加悬停效果
        document.querySelectorAll('.stat-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // 为交易记录添加点击效果
        document.querySelectorAll('.transaction-item').forEach(item => {
            item.addEventListener('click', () => {
                item.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new RevenueTracker();
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 添加一些可爱的交互效果
document.addEventListener('DOMContentLoaded', () => {
    // 为头像添加点击效果
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.addEventListener('click', () => {
            avatar.style.transform = 'scale(1.1) rotate(10deg)';
            setTimeout(() => {
                avatar.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    }

    // 为标题添加打字机效果
    const title = document.querySelector('.title');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        let index = 0;
        
        const typeWriter = () => {
            if (index < originalText.length) {
                title.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
});




