module.exports = {
    title: 'Tom Mentor 专栏',
    description: 'Tom Mentor 专栏',
    base: '/special-column/',
    // theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'tomMentor', 
                items: [
                    { text: 'Github', link: 'https://github.com/tomMentor' },
                    { text: '掘金', link: 'https://juejin.cn/user/3350967172479319' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "idmc",
                path: '/idmc/install',
                collapsable: false, // 不折叠
                children: [
                    { title: "初始化", path: "/idmc/install" },
                ],
            }
        ]
    },
    
}