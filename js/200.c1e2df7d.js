(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{828:function(n,i){n.exports='\x3c!--\ntitle: 01-C基础\nsort:\n--\x3e\n\n# C 语言基础\n\n## 第一个程序详解\n\n### `#include <stdio.h>`\n\n> 相当于复制粘贴\n> 把所指文件中的代码拷贝过来\n\n- `stdint.h`：使用`int32_t`类型\n\n### `int main(void)`\n\n> C 程序从`main()`开始执行\n> `int`表示返回类型\n> `void`表示无传入值\n> `()`用于识别`main`是一个函数\n\n- 新建函数\n  ```c\n  void name（void）；\n  void name（void）{}\n  ```\n\n### `printf（"%.2f", a）`\n\n1. printf 用%f 处理浮点值\n\n2. `.2`表示显示小数点后 2 位\n\n   | 转义符 | 含义                                 |\n   | ------ | ------------------------------------ |\n   | %d     | 十进制（dec）                        |\n   | %o %#o | 八进制（oct）                        |\n   | %x %#x | 十六进制（hex）                      |\n   | %n     | 已经输出的字符数量,需要变量地址接收. |\n\n3. 格式化`%[flags][width][.prec][h|L]type`\n\n### `scanf（"%d", &a）`\n\n> 使用&找到变量地点\n>\n> 数组的变量名是指针所以不用加&\n>\n> 返回成功读取数据的个数。\n\n### `unsigned int`\n\n> unsigned 为无符号声明\n>\n> \\_Bool 为布尔变量\n>\n> long long 64 位\n>\n> | 转义符 | 含义          |\n> | ------ | ------------- |\n> | %u     | unsigned int  |\n> | %ld    | long          |\n> | %lx    | 十六进制 long |\n> | %hd    | short         |\n\n- `sizeof()`：给出指定类型的大小\n\n  > 使用 `%z` 输出\n\n### `char c =`\n\n> | 值    | 情况           |\n> | ----- | -------------- |\n> | "t"   | 字符串报错     |\n> | t     | 赋值为变量     |\n> | \'cat\' | 只传入一个字母 |\n> | \\07   | a              |\n> | \'4\'   | `%d`为 52      |\n\n### 转换说明修饰符\n\n- `printf("%#+0*x", width, number)`\n\n  > `#` 显示 0x\n  >\n  > `+` 正数\n  >\n  > `0` 使用 0 填充\n  >\n  > `*` 自定义宽度\n\n- `scanf("%*d %d", &n)`\n\n  跳过前一个数字\n\n### `typedef unsigned int;`\n\n> 设置别名`name alias`\n>\n> 把`unsigned int`设置别名为`int`\n'}}]);