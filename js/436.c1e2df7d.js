(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{1064:function(n,e){n.exports='\x3c!--\ntitle: 20-基础语法\nsort:\n--\x3e\n\n## 变量\n\n```js\n// 变量\nlet value;\n// 常量\nconst pi;\n\n// 数字\n4.04 // 浮点数\n314e-2 // 科学计数法\nNaN // 非数字\nInfinity // 无穷\n\n// 字符串\n\'fzf404\'\n"fzf404“\n// 多行字符串 | 拼接\n`你好, ${name}, 你今年${age}岁了!`\n// 转义\n\'\\u4e2d\\u6587\' // 中文\n\'\\x41\' // A\n```\n\n## 数据类型\n\n### 数组\n\n```js\n// 数组 Array\n[2, 3, 5, 7, 11];\n\nlet arr = [1, 2, 3];\narr.length; // 3\n\n// 修改长度\narr.length = 6; // [1, 2, 3, undefined, undefined, undefined]\narr[5] = "x"; // a[1, 2, undefined, undefined, undefined, \'x\']\n\nlet arr = [10, 20, "30", "xyz"];\narr.indexOf(10); // 元素10的索引为0\narr.indexOf(20); // 元素20的索引为1\narr.indexOf(30); // 元素30没有找到，返回-1\narr.indexOf("30"); // 元素\'30\'的索引为2\n\n// 截取数组\nlet arr = ["A", "B", "C", "D", "E", "F", "G"];\narr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: [\'A\', \'B\', \'C\']\narr.slice(3); // 从索引3开始到结束: [\'D\', \'E\', \'F\', \'G\']\n\n// push pop unshift shift\narr.push("demo");\n\n// sort 排序\n// reverse\t反转\n// splice(起始位置，删除量，添加的元素)\n// concat\t连接\n// join\nlet arr = ["A", "B", "C", 1, 2, 3];\narr.join("-"); // \'A-B-C-1-2-3\'\n```\n\n### 对象\n\n```js\n// 对象\nlet person = { firstname: "fzf", lastname: "nmd", id: 404 };\n// 取值\nname = person.lastname;\nname = person["lastname"];\n\n// 创建对象\nlet person = {\n  firstName: "John",\n  lastName: "Doe",\n  id: 5566,\n  fullName: function () {\n    return this.firstName + " " + this.lastName;\n  },\n};\n\n// 访问\nperson.lastName;\nperson["lastName"];\nperson.fullName();\n"age" in person; // false\n\n// 嵌套\nlet obj = {\n  name: "Carrot",\n  details: {\n    color: "orange",\n    size: 12,\n  },\n};\n\nobj.details.color; // orange\nobj["details"]["size"]; // 12\n\n// 对象原型\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\n// 定义一个对象\nlet You = new Person("You", 24);\n// 我们创建了一个新的 Person，名称是 "You"\n// ("You" 是第一个参数, 24 是第二个参数..)\n```\n\n## 函数\n\n```js\nfunction Func(a, b) {\n  return a * b;\n}\n\n// arguments 全部参数\nfunction add() {\n  var sum = 0;\n  for (var i = 0, j = arguments.length; i < j; i++) {\n    sum += arguments[i];\n  }\n  return sum;\n}\n\nadd(2, 3, 4, 5); // 14\n\n// 使用剩余参数\nfunction avg(...args) {\n  var sum = 0;\n  for (let value of args) {\n    sum += value;\n  }\n  return sum / args.length;\n}\n\navg(2, 3, 4, 5); // 3.5\n\n// 内部函数\nfunction parentFunc() {\n  var a = 1;\n\n  function nestedFunc() {\n    var b = 4; // parentFunc 无法访问 b\n    return a + b;\n  }\n  return nestedFunc(); // 5\n}\n\n// 函数方法\nfunc.name;\nfunc.length; // 参数个数\nfunc.toString(); // 函数源码\n```\n\n## 运算符\n\n> == 等于(会转换类型后比较)\n>\n> === 绝对等于（值和类型均相等）\n\n```js\nNaN === NaN; // false\nisNaN(NaN); // true\n```\n\n## 语句\n\n```js\n// 条件判断\nif (condition1) {\n\t当条件 1 为 true 时执行的代码\n}\nelse if (condition2) {\n\t当条件 2 为 true 时执行的代码\n}\nelse {\n\t当条件 1 和 条件 2 都不为 true 时执行的代码\n}\n\n\n// 对象函数\nlet obj = {\n\'1\' : () => { document.write(1) },\n\'2\' : () => { document.write(2) },\n\'3\' : () => { document.write(3) },\n}\nobj[2]()\n\n// switch\nswitch(n) {\n    case 1:\n        执行代码块 1\n        break;\n    case 2:\n        执行代码块 2\n        break;\n    default:\n        与 case 1 和 case 2 不同时执行的代码\n}\n\n// for循环\nfor (语句 1; 语句 2; 语句 3) {\n    被执行的代码块\n}\n\n\nfor (let i in obj) {\n    被执行的代码块\n}\n\n// while循环\nwhile (条件) {\n    需要执行的代码\n}\n\n// break 语句用于跳出循环。\n// continue 用于跳过循环中的一个迭代。\n```\n'}}]);