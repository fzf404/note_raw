(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{1067:function(n,o){n.exports='\x3c!--\ntitle: 23-进阶使用\nsort:\n--\x3e\n\n## 内置函数\n\n```js\nvar person = null; // 值为 null(空), 但类型为对象\nvar person = undefined; // 值为 undefined, 类型为 undefined\nvar obj = { name: "fzf" };\ntypeof obj; // "object"\nObject.prototype.toString.call(2); // "[object Number]"\n```\n\n## 类型转换\n\n> 转换\n\n```js\n// 转换为字符串\n<obj>.toString()\nString(obj)\n\n// 转换为数字\nNumber(str)\n\n// 转换\nparseInt(str, scale)\nparseFloat()\n\n// 判断是否为正常数值\nisFinite()\n// 判断NaN，NaN不等于自身\nvalue !== value;\n```\n\n`constructor`\n\n> 返回变量的构造函数\n>\n> ```js\n> "John".constructor                 // 返回函数 String()  { [native code] }\n> (3.14).constructor                 // 返回函数 Number()  { [native code] }\n> false.constructor                  // 返回函数 Boolean() { [native code] }\n> [1,2,3,4].constructor              // 返回函数 Array()   { [native code] }\n> {name:\'John\', age:34}.constructor  // 返回函数 Object()  { [native code] }\n> new Date().constructor             // 返回函数 Date()    { [native code] }\n> function () {}.constructor         // 返回函数 Function(){ [native code] }\n> ```\n\n## Map 与 Set\n\n> {}的键必须为字符串，Map 解决了这个问题\n>\n> map 为键值对结构，查找速度极快\n>\n> set 类似 python 元组，元素不能重复\n\n```js\n// 创建map\nvar m = new Map([\n  ["fzf", "83"],\n  ["nmd", 17],\n  ["doge", 16],\n]);\nm.delete("fzf");\nm.set("fzf", 19);\nconsole.log(m.get("fzf"));\n// set\nvar s = new Set([1, 1, 2, 3, 5]);\nconsole.log([...s]);\n```\n\n## 迭代\n\n> 迭代类型可以通过`for..of`来遍历\n\n```js\nvar a = ["A", "B", "C"];\nvar s = new Set(["A", "B", "C"]);\nvar m = new Map([\n  [1, "x"],\n  [2, "y"],\n  [3, "z"],\n]);\nfor (var x of a) {\n  // 遍历Array\n  console.log(x);\n}\nfor (var x of s) {\n  // 遍历Set\n  console.log(x);\n}\nfor (var x of m) {\n  // 遍历Map\n  console.log(x[0] + "=" + x[1]);\n}\n```\n'}}]);