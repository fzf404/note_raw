(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{1054:function(n,e){n.exports='\x3c!--\ntitle: 02-基本使用\nsort:\n--\x3e\n\n### 引入样式表\n\n```html\n<link rel="stylesheet" href="style.css" />\n\x3c!-- 移动端适配 --\x3e\n<link media="(min-width: 800px)" rel="stylesheet" href="desktop.css" />\n<link media="(max-width: 800px)" rel="stylesheet" href="mobile.css" />\n```\n\n```css\n/* 引入其他样式表 */\n@import url(font.css);\n\n/* 移动端适配 */\n@media only screen and (max-width: 1000px) {\n  .demo {\n    width: 80v;\n  }\n}\n```\n\n## 用法\n\n```css\n/* 更改鼠标光标 */\ncursor: pointer;\n\n/* 延时响应 */\ntransition: background-color 150ms;\n```\n\n## 盒模型\n\n### 外边距\n\n```css\nmargin-top: 100px;\nmargin-bottom: 100px;\nmargin-right: 50px;\nmargin-left: 50px;\n\n/* 上 右 下 左  */\nmargin: 10px 10px 10px 0;\n/* 上 左右 下  */\nmargin: 10px 5px 20px;\n/* 上下 左右  */\nmargin: 10px 5px;\n```\n\n### 内边距\n\n> 同上\n\n### 边框\n\n- style\n\n  > none: 默认无边框\n  >\n  > dotted: 定义一个点线边框\n  >\n  > dashed: 定义一个虚线边框\n  >\n  > solid: 定义实线边框\n  >\n  > double: 定义两个边框。 两个边框的宽度和 border-width 的值相同\n  >\n  > groove: 定义 3D 沟槽边框。效果取决于边框的颜色值\n  >\n  > ridge: 定义 3D 脊边框。效果取决于边框的颜色值\n  >\n  > inset:定义一个 3D 的嵌入边框。效果取决于边框的颜色值\n  >\n  > outset: 定义一个 3D 突出边框。 效果取决于边框的颜色值\n\n```css\n/* 不同方向的样式 */\nborder-top-style: dotted;\nborder-right-style: solid;\nborder-bottom-style: dotted;\nborder-left-style: solid;\n\n/* 指定方式同上 */\nborder-style: dotted solid;\n\n/* 边框宽度 */\nborder-width: 3px;\n\n/* 边框颜色 */\nborder-color: red;\n\n/* 同时指定 */\nborder: 3px solid red;\n\n/* Outline */\n/* border外面不占空间的轮廓 */\n/* 颜色 | 样式 | 宽度 */\n\noutline: green dotted 4px;\n```\n\n### 阴影\n\n```css\n/* x偏移量 | y偏移量 | 阴影颜色 */\nbox-shadow: 60px -16px teal;\n\n/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */\nbox-shadow: 10px 5px 5px black;\n\n/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */\nbox-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n\n/* 插页(阴影向内) | x偏移量 | y偏移量 | 阴影颜色 */\nbox-shadow: inset 5em 1em gold;\n\n/* 任意数量的阴影，以逗号分隔 */\nbox-shadow: 3px 3px red, -1em 0 0.4em olive;\n\n/* 全局关键字 */\nbox-shadow: inherit;\nbox-shadow: initial;\nbox-shadow: unset;\n```\n\n'}}]);