module.exports = {
  title: "Cherry-UI",
  description: "一个 Vue UI 组件库",
  themeConfig: {
    nav: [
      {text: "主页", link: '/'},
      {text: "Github", link: "https://github.com/jrj444/cherry"}
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/introduction/',
          '/getting-started/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/components/Icon',
          '/components/Button',
          '/components/Layout',
        ]
      }
    ]
  }
};