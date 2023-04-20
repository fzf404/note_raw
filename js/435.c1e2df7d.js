(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{1063:function(n,t){n.exports="\x3c!--\ntitle: CSS实战\nsort:\n--\x3e\n\n## 全屏\n\n```scss\n* {\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\n// canvas全屏\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\n```\n\n### div 居中\n\n```css\n/* 方式1 */\n.center {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  margin: auto;\n  text-align: center;\n}\n\n/* 方式2 */\n.center {\n  position: absolute;\n  /* 最左侧位于中心 */\n  left: 50%;\n  top: 50%;\n  /* 中心 */\n  transform: translate(-50%, -50%);\n\n  text-align: center;\n}\n```\n\n### 滚动条样式\n\n```css\n/* 整体样式 */\n::-webkit-scrollbar {\n  width: 8px;\n  /* 不显示横向滑块 */\n  height: 0;\n}\n\n/* 滑块与导轨共有样式 */\n::-webkit-scrollbar-thumb,\n::-webkit-scrollbar-track {\n  border-radius: 8px;\n}\n\n/* 滑块 */\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.06);\n}\n\n/* 导轨 */\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.04);\n}\n```\n\n### 禁止选择\n\n```css\nuser-select: none;\n-webkit-user-selet: none;\n-moz-user-select: none;\n```\n\n"}}]);