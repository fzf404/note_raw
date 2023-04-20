(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{686:function(n,t){n.exports='\x3c!--\ntitle: Chart.js\nsort:\n--\x3e\n\n> [文档](https://chartjs.bootcss.com/docs/)\n\n## HelloWorld\n\n> [jsdelivr](https://www.jsdelivr.com/package/npm/chart.js?path=dist)\n\n```html\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"><\/script>\n    <title>Document</title>\n  </head>\n\n  <body>\n    <canvas id="myChart" width="400" height="400"></canvas>\n    <script>\n      var ctx = document.getElementById("myChart").getContext("2d");\n      var myChart = new Chart(ctx, {\n        type: "line",\n        data: {\n          labels: [\n            "January",\n            "February",\n            "March",\n            "April",\n            "May",\n            "June",\n            "July",\n          ],\n          datasets: [\n            {\n              label: "My Money",\n              backgroundColor: "rgb(255, 99, 132)",\n              borderColor: "rgb(200, 100, 100)",\n              data: [0, 10, 5, 3, 20, 30, 45],\n            },\n          ],\n        },\n        options: {},\n      });\n    <\/script>\n  </body>\n</html>\n```\n\n## 参数\n\n### 布局\n\n```html\n// 长宽修改\n<div class="chart-container">\n  <canvas id="myChart" width="400" height="400"></canvas>\n</div>\n\nvar ctx = document.getElementById("myChart"); var myChart = new Chart(ctx, {})\nmyChart.canvas.parentNode.style.width = \'400px\'; ctx.parentNode.style.width =\n\'400px\'; // 布局 options: { layout: { padding: { left: 30, right: 0, top: 30,\nbottom: 0 } }, }\n```\n\n#### 标题\n\n```js\n// options里\ntitle:{\n  display:\'true\',\n  fontSize: 22,\n  text:\'fzf404\\\'s money\'\n},\n```\n\n### 事件\n\n```js\noptions: {\n  onClick: () => {\n    console.log("Click Me!");\n  };\n}\n```\n\n## Charts\n\n### 折线图\n\n```js\nvar myLineChart = new Chart(ctx, {\n  type: "line",\n  data: {\n    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],\n    datasets: [\n      {\n        label: "Random",\n        data: [-3, -4, 8, 9, 1, -2, -8, -4, -4, 6, -10, 8],\n      },\n    ],\n  },\n  options: {\n    scales: {\n      yAxes: [\n        {\n          stacked: true,\n        },\n      ],\n    },\n  },\n});\n```\n\n### 柱状图\n\n```js\nvar myBarChart = new Chart(ctx, {\n  type: "bar",\n  data: {\n    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],\n    datasets: [{\n      label: "Random",\n      data: [-3, -4, 8, 9, 1, -2, -8, -4, -4, 6, -10, 8],\n      backgroundColor: [\'green\', \'yellow\', \'red\', \'red\', \'red\', \'yellow\', \'blue\', \'yellow\',\n        \'green\', \'red\', \'red\', \'red\']\n    }]\n  },\n  options: {\n```\n\n> 其他: 用到的时候再看\n> [文档](https://chartjs.bootcss.com/docs/charts/doughnut.html)\n\n### 混合图表\n\n> bar 与 line 的结合\n\n```js\nvar myLineChart = new Chart(ctx, {\n  type: "line",\n  data: {\n    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],\n    datasets: [\n      {\n        label: "Random",\n        data: [-3, -4, 8, 9, 1, -2, -8, -4, -4, 6, -10, 8],\n        backgroundColor: "rgb(255,100,130)",\n      },\n      {\n        label: "Random",\n        data: [1, 8, -6, -10, -6, 7, -2, 7, -3, -10, -6, 7],\n        backgroundColor: [\n          "green",\n          "yellow",\n          "red",\n          "red",\n          "red",\n          "yellow",\n          "blue",\n          "yellow",\n          "green",\n          "red",\n          "red",\n          "red",\n        ],\n        type: "bar",\n      },\n    ],\n  },\n  options: {},\n});\n```\n'}}]);