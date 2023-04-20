(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{1057:function(n,e){n.exports="\x3c!--\ntitle: 05-弹性布局\nsort:\n--\x3e\n\n> `display: flex;`\n>\n> `display: grid;`\n\n## Flex 布局\n\n### 父容器\n\n```scss\n// 排列反向\nflex-direction: row | row-reverse | column | column-reverse;\n// 换行\nflex-wrap: nowrap | wrap | wrap-reverse;\n// 合并前两个\nflex-flow: column wrap;\n// 水平对齐\njustify-content:\n//\t开头\t\t结尾\t\t中心\nflex-start | flex-end | center |\n//\t两头\t\t中心\t\t等距\nspace-between | space-around | space-evenly\n// 垂直对齐\nalign-items:\n// 拉伸\t\t顶部\t\t\t底部\t\t中心\nstretch | flex-start | flex-end | center |\nbaseline\t// 中心线\n// 多行对齐\nalign-content:\nstretch | flex-start | flex-end | center |\nspace-between | space-around | space-evenly | baseline\n```\n\n### 子项目\n\n```scss\norder: \t\t\t// 顺序\nflex-grow:\t\t// 拉伸比例\nflex-shrink: \t// 收缩比率\nflex-basis:\t\t// 基本宽度\nflex:\t\t\t// 前三者和\n// 子项目对齐方式\nalign-self：\nauto | flex-start | flex-end | center | stretch | baseline\n```\n\n### 实例\n\n```css\n/* 居中对齐 */\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n\n/* 导航栏 */\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\njustify-content: space-between;\n```\n\n## Grid 布局\n\n```scss\ndisplay: grid;\n\n// 垂直排列\ngrid-template-rows: 10rem 30%;\n// 两行, 每行 50px\ngrid-template-rows: repeat(2, 50px);\n// 水平排列 自动 剩余空间占1份 最小100px/最大占2份\ngrid-template-columns: auto 1fr minmax(100px, 2fr);\n// 自动填充, 每个单元格 200px\ngrid-template-columns: repeat(auto-fill, 200px);\n\n// 间距\nrow-gap: 2rem;\ncolumn-gap: 2rem;\n// 简写\ngrid-gap: 2rem 2rem;\n\n// 相对父容器对齐\njustify-content: center;\nalign-content: center;\n\n// 子元素对齐\njustify-items: center; // 水平对齐\nalign-items: center; // 垂直对齐\n\n// 子元素操作\n.item:nth-child(2) {\n  justify-self: start;\n  align-items: start;\n}\n\n// 子元素\n// 大小为1, 左边框在第一个网格线, 右边框在第二个网格线\ngrid-column-start: 1;\ngrid-column-end: 2;\n// 大小为2, 左边框在第二个网格线, 右边框在第四个网格线\ngrid-column-start: 2;\ngrid-column-end: 4;\n```\n"}}]);