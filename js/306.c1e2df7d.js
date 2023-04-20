(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{934:function(n,e){n.exports="\x3c!--\ntitle: 36-Django入门\nsort:\n--\x3e\n\n## 创建\n\n```bash\n# 创建项目\ndjango-admin startproject demo\n# 运行项目\npython manage.py runserver\n\ndemo\n├── demo              \t\t\t\t// 项目全局文件目录\n│   ├── __init__.py\n│   ├── settings.py          \t// 全局配置\n│   ├── urls.py              \t// 全局路由\n│   └── wsgi.py\n└── manage.py                \t// 项目管理脚本\n\n# 创建自定义app\npython manage.py startapp news\n\nnews                     // news 应用目录\n├── __init__.py          // 初始化模块\n├── admin.py             // 后台管理配置\n├── apps.py              // 应用配置\n├── migrations           // 数据库迁移文件目录\n│   └── __init__.py      // 数据库迁移初始化模块\n├── models.py            // 数据模型\n├── tests.py             // 单元测试\n└── views.py             // 视图\n```\n\n## 入门\n\n### 路由\n\n1. 全局路由: `demo/urls.py`\n\n   ```python\n   from django.contrib import admin\n   from django.urls import path, include\n\n   urlpatterns = [\n   \tpath('admin/', admin.site.urls),\n   \t# 引用子路由表\n   \tpath('', include('news.urls')),\n   ]\n   ```\n\n2. 子应用路由表: `news/usls.py`\n\n   ```python\n   from django.urls import path\n\n   from . import views\n\n   urlpatterns = [\n     # 子路由表\n     path('', views.index, name='index')\n   ]\n   ```\n\n3. 视图: `news/views.py`\n\n   ```python\n   from django.http import HttpResponse\n\n   def index(request):\n     return HttpResponse('Hello Django')\n   ```\n\n### 渲染\n\n1. 渲染模板`news/templates/news`\n\n   ```python\n   {% if news_list %}\n     <ul>\n     {% for elem in news_list %}\n       <li>\n         <h3>{{ elem.title }}</h3>\n         <p>{{ elem.content }}</p>\n       </li>\n     {% endfor %}\n     </ul>\n   {% else %}\n     <p>NULL</p>\n   {% endif %}\n   ```\n\n2. 渲染`news/views.py`\n\n   ```python\n   from django.shortcuts import render\n\n   def index(request):\n       context = {\n           'news_list': [\n               {\n                   \"title\": \"123\",\n                   \"content\": \"12345\",\n               },\n               {\n                   \"title\": \"123\",\n                   \"content\": \"12345\",\n               },\n   \t\t]}\n       return render(request, 'news/index.html', context=context)\n   ```\n\n### 数据库\n\n> `ORM`: 面向对象的语法,完成关系型数据库的操作\n\n```python\n# 查询所有模型 SELECT * FROM Blog\nBlog.objects.all()\n\n# 查询单个模型 SELECT * FROM Blog WHERE ID=1\nBlog.objects.get(id=1)\n\n# 添加单个模型\n# INSERT INTO Blog (title, content) VALUES ('hello', 'world')\nblog = Blog(title='hello', content='world')\nblog.save()\n```\n\n1. 数据模型`news/models.py`\n\n   ```python\n   from django.db import models\n\n   # Create your models here.\n   class Post(models.Model):\n       title = models.CharField(max_length=200)\n       content = models.TextField()\n\n       def __str__(self):\n           return self.title\n\n   # 生成迁移脚本 news\\migrations\\0001_initial.py\n   python manage.py makemigrations\n   # 进行数据迁移\n   python manage.py migrate\n   # 新建用户 localhost:8000/admin\n   python manage.py createsuperuser\n   ```\n\n2. 配置后台管理接口\n\n   ```python\n   # 引入之前配置好的数据模型\n   from .models import Post\n\n   admin.site.register(Post)\n   ```\n\n3. 视图中加入数据查询代码\n\n   ```python\n   from .models import Post\n\n   def index(request):\n       context = { 'news_list': Post.objects.all() }\n       return render(request, 'news/index.html', context=context)\n   ```\n\n4. 完工\n\n   ![image-20210209123700262](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/image-20210209123700262.png)\n"}}]);