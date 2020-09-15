module.exports = {
  title: "Cherry-UI",
  description: "一个 Vue UI 组件库",
  base: "/cherry/",
  themeConfig: {
    nav: [
      {text: "主页", link: '/'},
      {text: "文档", link: '/guide/Introduction'},
      {text: "Github", link: "https://github.com/jrj444/cherry"}
    ],
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          'guide/Introduction',
          'guide/Install',
          'guide/QuickStart'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/components/Icon',
          '/components/Grid',
          '/components/Layout',
          '/components/Button',
          '/components/Switch',
          '/components/Tabs',
          '/components/Input',
          '/components/Toast',
          '/components/Popover',
          '/components/Collapse'
        ]
      }
    ]
  }
};