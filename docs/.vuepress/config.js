module.exports = {
  title: "Cherry-UI",
  description: "一个 Vue UI 组件库",
  themeConfig: {
    nav: [
      {text: "Home", link: "/"}
    ],
    sidebar: [
      {
        title: "快速开始",
        children: [
          "/introduction/",
          "/getting-started/"
        ]
      },
      {
        title: "组件",
        children: [
          "/components/Layout",
          "/components/Container",
          "/components/Button",
          "/components/Icon",
          "/components/Toast",
          "/components/Tabs",
          "/components/Popover"
        ]
      }
    ]
  }
};