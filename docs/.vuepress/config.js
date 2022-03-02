/*
 * @Author: your name
 * @Date: 2022-01-14 11:40:44
 * @LastEditTime: 2022-03-02 21:57:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /special-column/docs/.vuepress/config.js
 */
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
            require('./router/idmc'),
            require('./router/linux'),
            require('./router/nginx')
        ]
    },
    
}