(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{1073:function(n,t){n.exports='\x3c!--\ntitle: 29-异步请求\nsort:\n--\x3e\n\n## Windows\n\n```js\nalert();\nresult = confirm("Are you boy?");\nresult = prompt("Input Your name");\n\n// 定时\nvar hello = setTimeout("sayhello()", 5000);\n// 持续\nvar gtime = setInterval("time()", 500);\n// 停止\nclearTimeout(gtime);\n```\n\n## 异步请求\n\n```js\nlet xmlhttp = new XMLHttpRequest();\nlet gurl = "https://api.github.com/repos/fzf404/Tech_Note/commits";\nxmlhttp.open("GET", gurl, true);\nxmlhttp.send();\n// 解析响应数据\nxmlhttp.onreadystatechange = () => {\n  let data = xmlhttp.responseText;\n  let jsonData = JSON.parse(data);\n  console.log(jsonData[0].commit.message);\n};\n```\n'}}]);