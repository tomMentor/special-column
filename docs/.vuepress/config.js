module.exports = {
    title: 'Tom Mentor 专栏',
    description: 'Tom Mentor 专栏',
    base: '/special-column/',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: 'Github', link: 'https://github.com/tomMentor' },
            { text: '掘金', link: 'https://juejin.cn/user/3350967172479319' }
        ],
        sidebar: [
            {
                title: "IDMC",
                path: '/idmc/install',
                // collapsable: false, // 不折叠
                children: [
                    { title: "Install", path: "/idmc/install" },
                    { title: "基础", path: "/idmc/bases" },
                ],
            }
        ]
    },
    
}