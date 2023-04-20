(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{684:function(t,n){t.exports='\x3c!--\ntitle: JQuery\nsort:\n--\x3e\n\n> 初学 JS\n\n## 常用\n\n### 平滑跳转\n\n```js\n$(".nav-link").click(function () {\n  $($(this).attr("href"))\n    .get(0)\n    .scrollIntoView({ block: "center", behavior: "smooth" });\n});\n```\n\n### 幻灯片特效\n\n> [文档](https://owlcarousel2.github.io/OwlCarousel2/)\n\n```js\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/assets/owl.carousel.min.css">\n<script src="https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/owl.carousel.min.js"><\/script>\n\n<div class="owl-carousel owl-theme"></div>\n\n$(\'.owl-carousel\').owlCarousel({\n\tloop: true,\n\tautoplay: true,\n\tautoplayTimeout: 4000,\n\tresponsive: {\n\t\t0: {\n\t\t\titems: 1\n\t\t},\n\t\t500: {\n\t\t\titems: 2\n\t\t},\n\t\t750: {\n\t\t\titems: 3\n\t\t},\n\t\t1000: {\n\t\t\titems: 4\n\t\t}\n\t}\n})\n```\n\n### 存储\n\n```js\n// 会话存储\nwindow.sessionStorage.setItem("data", data.data.token);\nwindow.sessionStorage.getItem("data");\n\n// 本地存储\nwindow.localStorage.setItem("data", data.data.token);\nwindow.localStorage.getItem("data");\n\n// object存储\nwindow.sessionStorage.setItem("data", JSON.stringify(data));\n```\n'}}]);