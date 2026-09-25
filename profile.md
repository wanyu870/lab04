# 个人作品集 · 资料修改指南

本文件用于说明「个人作品集网站」中哪些内容可以修改、各自放在哪个文件里。
页面布局与视觉风格无需改动，只需替换文本或图片。

---

## 一、个人信息（姓名 / 简介 / 定位语）

文件：`index.html`

| 内容 | 位置 | 说明 |
| --- | --- | --- |
| 姓名（中文） | `index.html` 中 `.brand` 文字；`.hero__name` 里的中文 | 如 梁天驰 |
| 姓名（英文） | `.hero__name em` | `index.html` 第 60 行 `Nicholas` |
| 定位语 | `.hero__tagline` | `index.html` 第 61 行，如「前端工程师 · 用代码编排清晰的界面与叙事」 |
| 首屏自我介绍 | `.hero__intro` 下的 3 段 `<p>` | `index.html` 第 73–77 行 |
| 页面标题 `<title>` | `<title>` 标签 | `index.html` 第 6 行 |

> 提示：改动姓名时，浏览器标签页标题（`<title>`）也建议同步修改。

---

## 二、头像照片（个人照片）

文件：`index.html`

位置：`index.html` 约第 64–69 行的 `.hero__portrait` 里的 `<img src="...">`。

修改方式（二选一）：
1. **替换为本地图片**：把你的照片放到 `assets/images/` 目录，例如 `assets/images/avatar.jpg`，再把 `src="assets/images/avatar.jpg"`；
2. **替换为外链图片**：直接把 `src` 改成你的图片 URL。

> 当前为 AI 生成的占位头像（一段 `trae-api-.../text_to_image?...` 地址），替换后即显示你自己的照片。

---

## 三、技能方向

文件：`index.html`

位置：`index.html` 第 86–125 行的「技能方向」区块。

- 分组名：`.skills__group-title`，如「前端」「设计」「工具与其他」。
- 每组技能：`.tag` 文本，`<li class="tag">HTML</li>`。
- 可自行增删分组或标签。

---

## 四、关于我

文件：`index.html`

位置：`index.html` 第 138–183 行的「关于我」区块。

| 内容 | 位置 |
| --- | --- |
| 引言（`about__lead`） | 第 144 行 |
| 展开叙述（3 段） | `.about__narrative`，第 149–151 行 |
| 关注方向 | `.about__list` 下的 `<li>`，第 155–159 行 |
| 事实档案（教育/经历/兴趣/正在做） | `.about__fact` 中的 `dt`/`dd`，第 164–179 行 |

可自行增删事实条目，每条的标签与内容分别在 `dt` 和 `dd` 中。

---

## 五、联系方式

文件：`index.html`

| 内容 | 位置 |
| --- | --- |
| 主邮箱（超大文字链接） | `.contact__email`，第 192 行（`href="mailto:..."` 与显示文本同步改） |
| 社交链接（GitHub / 微信 / Dribbble / 微博） | `.contact__links` 下的 `<a>`，第 196–201 行（改文字与 `href`） |
| Hero 区的邮箱快捷入口 | `.hero__facts`，第 81 行 `hello@linyi.dev` |
| 所在地 / 当前状态 | `.hero__facts`，第 79–80 行 |
| 版权（尾部 © 年份 姓名） | `.contact__foot`，第 204 行 |

---

## 六、项目内容（作品经历）

文件：`js/projects-data.js`

不是写在 HTML 里，而是由一个数据数组驱动，页面会自动渲染。

每个项目是一个对象，字段如下：

```js
{
  name: "项目名称",
  desc: "项目简介（2-3 行）",
  stack: ["技术1", "技术2"],   // 技术栈标签
  date: "2025.06",             // 完成时间
  category: "分类（如 个人项目 / 前端工程）",
  image: "图片地址或 assets/images/xx.jpg",   // 项目图片
  links: [                     // 可选链接
    { label: "在线演示", url: "#" },
    { label: "源码", url: "#" }
  ]
}
```

- **新增项目**：在上述数组最后追加一个对象（注意在最后一个对象后加 `,`）。
- **修改项目**：直接改对应对象的字段即可。
- **项目图片**：图片地址填到 `image` 字段，可放 `assets/images/` 下或用外链。
- 保存后刷新页面即可看到效果，无需改 HTML 结构。

---

## 七、不要改动的部分（保持页面正常）

- `css/` 目录全部样式文件：负责布局与视觉，默认无需改动。
- `js/main.js`、`js/render.js`：负责渲染与交互，请保留原样。
- `index.html`、`projects-data.js` 中的结构标签（class 名、标签嵌套）建议不要改动，只替换其中的文本内容。