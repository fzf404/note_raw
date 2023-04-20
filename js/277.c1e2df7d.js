(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{905:function(n,u){n.exports="\x3c!--\ntitle: 05-Python技巧\nsort:\n--\x3e\n\n## 优化循环\n\n```python\nfrom itertools import product\n\n\ndef find_twelve_v2(num_list1, num_list2, num_list3):\n  # 麻烦的写法\n  for num1 in num_list1:\n    for num2 in num_list2:\n      for num3 in num_list3:\n        if num1 + num2 + num3 == 12:\n          return num1, num2, num3\n  # 高级的写法\n  for num1, num2, num3 in product(num_list1, num_list2, num_list3):\n    if num1 + num2 + num3 == 12:\n      return num1, num2, num3\n```\n\n### 替代 break\n\n```\nfrom itertools import takewhile\n\n# 当遇到 is_qualified s\nfor user in takewhile(is_qualified, users):\n    pass\n```\n\n"}}]);