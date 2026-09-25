/* ===== projects-data.js · 项目数据（后续扩展只改这里） =====
 * 每个项目一个对象：
 *  - name     项目名称
 *  - desc     简介（2-3 行）
 *  - stack    技术栈标签数组
 *  - date     完成时间
 *  - category 类别
 *  - image    图片地址（可放 assets/images/ 下，或直接用外链 URL）
 *  - links    可选链接：[{ label, url }]
 * 新增项目：向数组中追加一个对象即可，主结构与渲染逻辑无需改动。
 */
window.PROJECTS = [
  {
    name: "潮汐 · 内容型个人主页",
    desc: "一个以纵向叙事与留白为核心的个人主页，用通栏分割与大字号标题编排内容节奏，重点打磨滚动叙事与响应式细节。",
    stack: ["HTML", "CSS", "JavaScript"],
    date: "2026.06",
    category: "Web应用",
    image: "assets/images/avatar1.png",
    links: [
      { label: "在线演示", url: "#" },
      { label: "源码", url: "#" }
    ]
  },
  {
    name: "灵感 · 设计系统文档站",
    desc: "面向团队内部的设计令牌与组件文档平台，统一色彩、字号与间距尺度，支持暗色模式与在线预览，降低产品落地成本。",
    stack: ["CSS Variables", "JavaScript", "文档工程"],
    date: "2026.03",
    category: "Web应用",
    image: "assets/images/avatar2.jpg",
    links: [
      { label: "在线演示", url: "#" },
      { label: "源码", url: "#" }
    ]
  },
  {
    name: "流光 · 数据可视化仪表盘",
    desc: "实时数据可视化看板，将多源指标聚合为清晰图表与趋势视图，兼顾信息密度与可读性，适配桌面与移动简报场景。",
    stack: ["JavaScript", "Canvas", "响应式"],
    date: "2025.11",
    category: "数据可视化",
    image: "assets/images/avatar3.png",
    links: [
      { label: "在线演示", url: "#" },
      { label: "源码", url: "#" }
    ]
  },
  {
    name: "拾光 · 摄影师作品集",
    desc: "为大画幅摄影作品打造的全宽杂志式作品集，弱化 UI、突出画面，以发丝分割线和大留白建立沉静的阅读体验。",
    stack: ["HTML", "CSS", "懒加载"],
    date: "2025.07",
    category: "Web应用",
    image: "assets/images/avatar4.jpg",
    links: [
      { label: "在线演示", url: "#" }
    ]
  },
  {
    name: "尺墨 · 移动端信息聚合页",
    desc: "面向移动端的信息聚合落地页，在高密度内容中稳定排版，优化触控与可读性，显著改善小屏浏览体验与加载表现。",
    stack: ["HTML", "CSS", "JavaScript"],
    date: "2025.02",
    category: "移动应用",
    image: "assets/images/avatar5.png",
    links: [
      { label: "在线演示", url: "#" },
      { label: "源码", url: "#" }
    ]
  }
];