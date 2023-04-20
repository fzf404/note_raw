(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{908:function(n,e){n.exports="\x3c!--\ntitle: 05-Python面向对象高级\nsort:\n--\x3e\n\n# Python 面向对象\n\n## 面向对象总结\n\n- 类的属性\n\n  > 私有属性\n  >\n  > - 以两个下划线开头\n  > - 不能被外部使用\n  > - 调用：`self.__private_attrs`\n\n- 类的方法\n\n  ```python\n  __init__       # 构造函数，在生成对象时调用\n  __del__        # 析构函数，释放对象时使用\n  __repr__       # 打印，转换\n  __setitem__    # 按照索引赋值\n  __getitem__    # 按照索引获取值\n  __len__        # 获得长度\n  __cmp__        # 比较运算\n  __call__       # 函数调用\n  __add__        # 加运算\n  __sub__        # 减运算\n  __mul__        # 乘运算\n  __div__        # 除运算\n  __mod__        # 求余运算\n  __pow__        # 称方\n  ```\n\n- 使用类的内置方法进行方法的构造：\n\n```python\nclass person():\n    def __init__(self,name,age,weight):\n        self.name = name\n        self.age = age\n        self.__weight = weight\n    def __cmp__(self):\n        pow_age = self.age.__pow__(2)\n        print(pow_age)\n    def __len__(self):\n        name_del = self.name.__len__()\n        print(name_del)\n    def __add__(self):\n        adds = self.age.__add__(self.__weight)\n        print(adds)\n    def infoma(self):\n        print('%s is %s weights %s'%(self.name,self.age,self.__weight))\nprint(person.__class__)\t\t# <class 'type'>\nprint(person.__repr__)\t\t# <slot wrapper '__repr__' of 'object' objects>\n\nperson = person('bruce',25,60)\nprint(person)\t\t\t\t# <__main__.person object at 0x0000020744E69668>\ninfoma = person.infoma()\t# bruce is 25 weights 60\ncmp = person.__cmp__()\t\t# 625\nlens = person.__len__()\t\t# 5\nadds = person.__add__()\t\t# 85\nprint('doc is %s'%person.__doc__)\nprint('dir is %s'%person.__dir__)\nprint('delatter is %s'%person.__delattr__)\nprint('gt is %s'%person.__gt__)\nprint('hash is %s'%person.__hash__)\nprint('init is %s'%person.__init__)\nprint('new is %s'%person.__new__)\n\n'''\ndoc is None\ndir is <built-in method __dir__ of person object at 0x0000020744E69668>\ndelatter is <method-wrapper '__delattr__' of person object at 0x0000020744E69668>\ngt is <method-wrapper '__gt__' of person object at 0x0000020744E69668>\nhash is <method-wrapper '__hash__' of person object at 0x0000020744E69668>\ninit is <bound method person.__init__ of <__main__.person object at 0x0000020744E69668>>\nnew is <built-in method __new__ of type object at 0x00000000617BDFD0>\n'''\n```\n\n## 类的属性\n\n- 数据属性\n\n```python\nclass person(object):\n    tall = 180\n    hobbies = []\n    def __init__(self, name, age,weight):\n        self.name = name\n        self.age = age\n        self.weight = weight\n    def infoma(self):\n        print('%s is %s weights %s'%(self.name,self.age,self.weight))\nperson.hobbies.extend([\"football\", \"woman\"])   # 类数据属性可以进行访问/修改\nprint(\"person hobbies list: %s\" %person.hobbies)\n\nperson.hobbies2 = [\"reading\", \"jogging\", \"swimming\"]  # 可以通过类名动态添加类数据属性。\nprint(\"person hobbies2 list: %s\" %person.hobbies2)\nprint(dir(person))\t\t# person中所有属性\n\n\nBruce = person(\"Bruce\", 25,60)    #实例数据属性只能通过实例访问\nprint(\"%s is %d years old\" %(Bruce.name, Bruce.age))\nBruce.gender = \"male\"   #动态添加实例数据属性\nprint(\"%s is %s\" %(Bruce.name, Bruce.gender) )\nprint(dir(Bruce))\nBruce.hobbies.append(\"C#\")\nprint(Bruce.hobbies)\t# ['football', 'woman', 'C#']\n\nwill = person(\"Will\", 27,60)\nprint(\"%s is %d years old\" %(will.name, will.age))\nprint(will.__dict__)    # 列出所有属性及值\nprint (will.hobbies)\t# ['football', 'woman', 'C#']\n```\n\n- 类的属性\n\n> `__name__`：类的名字（字符串）\n>\n> `__doc__` ：类的文档字符串\n>\n> `__bases__`：类的所有父类组成的元组\n>\n> `__dict__`：类的属性组成的字典\n>\n> `__module__`：类所属的模块\n>\n> `__class__`：类对象的类型\n\n## 类的方法\n\n1. 实例方法\n\n> 第一个参数必须是`self`\n\n2. 类方法\n\n> 以`cls`作为第一个参数。\n>\n> 使用`@classmethod`装饰器。\n\n```python\nclass person(object):\n    tall = 180\n    hobbies = []\n    def __init__(self, name, age,weight):\n        self.name = name\n        self.age = age\n        self.weight = weight\n    @classmethod     \t# 类的装饰器\n    def infoma(cls):   \t# cls表示类本身，可直接调用\n        print(cls.__name__)\n        print(dir(cls))\n```\n\n3. 静态方法\n\n> 不需要参数，使用`staticmethod`装饰器。\n\n```python\n@staticmethod   # 静态方法装饰器\ndef infoma():\t# 没有参数限制\nprint(person.tall)\nprint(person.hobbies)\n```\n\n## 类的访问控制\n\n- 单下划线\n\n  > 通过`_`来实现模块私有化\n  >\n  > **变量除外**\n  >\n  > `from moduleName import *`不会引用\n\n- 双下划线\n\n  > 双下划线开头的属性在运行时会被\"混淆”\n  >\n  > **属性名前增加了单下划线和类名**\n\n## 类的继承、初始化与 super 方法\n\n1. 继承\n\n> **子类将继承父类的属性**\n>\n> 通过`issubclass()`判断是否为子类\n\n```python\nclass Parent(object):\n    Value = \"Hi, Parent value\"\n    def fun(self):\n        print(\"This is from Parent\")\n\nclass Child(Parent):\n    Value = \"Hi, Child  value\"\n    def fun(self):\n        print(\"This is from Child\")\n        Parent.fun(self)   #调用父类Parent的fun函数方法\n\nc = Child()\nc.fun()\n```\n\n2. 继承中的`__init__`\n\n> **若子类未定义初始化函数，父类的初始化函数会被调用**\n>\n> **在子类中显示调用父类，子类和父类的属性都会被初始化**\n\n```python\nclass Parent(object):\n    def __init__(self, name):\n        self.name = name\n        print(\"create an instance of:\", self.__class__.__name__)\n        print(\"name attribute is:\", self.name)\n\nclass Child(Parent):\n    pass\n\nc = Child('fzf')\t\t# 调用父函数\nc = Child()\t\t\t\t# 报错\n```\n\n## Super 的使用\n\n- 调用父类方法，以显示父类\n\n  > 子类会继承父类的所有的属性和方法\n  >\n  > 并覆盖父类的同名属性和方法\n\n  ```python\n  super(Child,self).fun()\n  # 代替Parent.fun()\n  ```\n"}}]);