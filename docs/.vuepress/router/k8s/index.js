/*
 * @Author: Tom
 * @Date: 2023-05-06 11:29:05
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
module.exports = {
  title: "K8S",
  path: '/k8s/install',
  children: [
    {
      title: 'Install',
      path: '/k8s/install'
    },
    {
      title: 'k8s配置域名访问',
      path: '/k8s/domainname/traefikinit',
      children: [
        {
          title: 'Traefik 初始化',
          path: '/k8s/domainname/traefikinit',
        },
        {
          title: 'ingress 配置',
          path: '/k8s/domainname/ingress',
        },
        {
          title: '服务器中的 nginx 配置',
          path: '/k8s/domainname/nginx',
        },
      ]
    },
    {
      title: 'Unloading',
      path: '/k8s/unloading'
    },
    {
      title: '常用命令',
      path: '/k8s/command'
    },
    {
      title: '异常处理',
      path: '/k8s/error'
    }
  ],
}