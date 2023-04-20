(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{910:function(n,t){n.exports="\x3c!--\ntitle: 07-PythonIO\nsort:\n--\x3e\n\n# PythonIO 编程\n\n> 涉及到数据交换的地方，IO 操作会有 Input 和 Output 两个数据流。\n>\n> 同步和异步的区别就在于是否等待 IO 执行的结果。\n\n## 文件读写\n\n- 读取文件\n\n  ```python\n  f = open('/Users/michael/test.txt', 'r')\t# 打开一个文件\n  f.read()\t\t\t# 把文件读取到内存\n  f.readline()\t\t# 防止文件过大\n  f.close()\t\t\t# 关闭文件对象\n  ```\n\n  > 由于文件读写时都有可能产生`IOError`，一旦出错，后面的`f.close()`就不会调用。所以，为了保证无论是否出错都能正确地关闭文件，我们可以使用`try ... finally`来实现：\n  >\n  > 可以使用更简洁的`with`语句调用方法。\n  >\n  > ```python\n  > with open('/path/to/file', 'r') as f:\n  >     print(f.read())\n  > ```\n\n- **file-like Object**\n\n  > 像`open()`函数返回的这种有个`read()`方法的对象，在 Python 中统称为 file-like Object。除了 file 外，还可以是内存的字节流，网络流，自定义流等等。file-like Object 不要求从特定类继承，只要写个`read()`方法就行。\n\n- 传入参数\n\n  ```python\n  f = open('test.txt', 'rb')\t\t\t\t\t\t# 二进制文件\n  f = open('gbk.txt', 'r', encoding='gbk')\t\t# 设置编码\n  f = open('gbk.txt', 'r', errors='ignore')\t\t# 忽略错误\n  ```\n\n- 写文件\n\n  ```python\n  f = open('test.txt','w')\t\t# 覆盖写入\n  f.write('Hello TXT.')\n  f.close()\n\n  with open('test.txt','a') as f:\t# 追加写入\n  \tf.write('hhh')\n  ```\n\n## CSV\n\n```python\nimport csv\n# 读取\ndata = csv.reader(open(file_name,'r'))\t# 返回一个二维列表\n\n# 写入\nf = open(file_name, 'w', newline='')\nw_csv = csv.writer(f)\t\t\t\t# csv_write对象\nw_csv.writerow(list)\t\t\t\t# 写一行\nw_csv.writerows(list)\t\t\t\t# 写多行\n\nw_csv = csv.DictWriter(f,headers)\t\t# 字典，传入字典头\nf_csv.writeheader()\t\t\t\t\t\t# 将传入的headers写入csv\nf_csv.writerows(rows)\t\t\t\t\t# 写入字典\n```\n\n## StringIO\n\n- 在内存中读写 str\n\n  ```python\n  from io import StringIO\n\n  f = StringIO()\n  f.write('Hello')\n  f.write(' ')\n  f.write('fzf')\n  print(f.getvalue())\t\t\t\t# 获取str\n  ```\n\n- **ByteIO**\n\n  ```python\n  from io import BytesIO\n\n  f = BytesIO()\n  f.write('中文'.encode('utf-8'))\n  # f.write(r'\\xe4...')\n  print(f.getvalue())\t\t\t# b'\\xe4\\xb8……\n  ```\n\n## OS\n\n```python\nimport os\nos.name()\t\t\t\t# 系统类型\nos.uname()\t\t\t\t# 系统详细信息（windows不提供）\nos.environ\t\t\t\t# 系统环境变量\nos.environ.get('PATH')\t# 获取特定环境变量的值\n# 文件和目录\nos.path.abspath('')\t\t# 文件绝对目录\npath = os.path.join('path', new_folder)\t# 准备工作\n# 该函数会自动返回系统对应的目录结构\nos.mkdir(path)\t\t\t# 新建文件夹\nos.path.spilt(path)\t\t# 将路径拆分\nos.path.spiltext(path)\t# 直接得到文件扩展名\n# 并不要求文件真实存在\nos.rename(old, new)\t\t# 重命名\nos.remove(file)\t\t\t# 删除\n# 复制文件可以参考shutil函数\n[x for x in os.listdir('.') if os.path.isdir(x)]\n# 列出所有文件夹\nos.listdir('.')\t当前目录的所有文件及文件夹\nos.isdir()\t\t判断是否为路径\n[x for x in os.listdir('.') if os.path.isfile(x) and os.path.splitext(x)[1]=='.py']\n# 列出所有py文件\n```\n\n## 序列化\n\n- 在程序运行过程中修改变量并不会保存。\n\n- 把变量从内存中变成磁盘中的过程叫序列化。\n\n  ```python\n  import pickle\n\n  with open('dump.txt', 'wb') as f:\n      list = '1 2 3 4'.split()\n      pickle.dump(list, f)\n  with open('dump.txt', 'rb') as f:\n      list = pickle.load(f)\n      print(list)\n  ```\n\n### JSON\n\n- 在不同编程语言之间传递对象。\n\n- | JSON 类型  | Python 类型  |\n  | :--------- | :----------- |\n  | {}         | dict         |\n  | []         | list         |\n  | \"string\"   | str          |\n  | 1234.56    | int 或 float |\n  | true/false | True/False   |\n  | null       | None         |\n\n  ```python\n  import json\n  dj = json.dumps(d)\t\t\t\t# 返回一个json格式的str\n  d = json.load(dj)\t\t\t\t# 转换回来\n  ```\n\n- 将`class`转换为 JSON。\n\n  ```python\n  import json\n\n  class Student(object):\n      def __init__(self, name, age, score):\n          self.name = name\n          self.age = age\n          self.score = score\n\n  def student2dict(std):\t\t\t\t# 写一个转换函数\n      return {\n          'name': std.name,\n          'age': std.age,\n          'score': std.score\n      }\n\n  s = Student('Bob', 20, 88)\n  print(json.dumps(s, default = student2dict))\n  ```\n"}}]);