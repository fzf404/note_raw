(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{801:function(n,t){n.exports='\x3c!--\ntitle: 大一总结\nvisible: true\n--\x3e\n\n## 前端\n\n- 前端三件套\n\n  > [我的首页](https://fzf404.art/)\n  >\n  > [新首页-施工中](https://pre.fzf404.art/)\n\n- Bootstrap + Jquery\n\n  > [前后端源码](https://gitee.com/nmdfzf404/ql2020kpi)\n\n  <img src="https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/20210410204945.png" style="zoom: 50%;" />\n\n- Electron\n\n  > [CameraHelper](https://github.com/fzf404/CameraHelper)\n\n  <img src="https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/202109212033181.png" alt="image-20210921203322939" style="zoom:50%;" />\n\n- ReactHooks + AntD\n\n  > [Tabox](https://tab.fzf404.art/)\n  >\n  > [源码](https://gitee.com/nmdfzf404/company-work01)\n\n  <img src="https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/20210621104207.png" alt="image-20210305133016461" style="zoom:50%;" />\n\n- Vue + Bootstrap\n\n  > [华夏眼科医院](https://www.huaxiaeye.com/)\n  >\n  > [前后端源码](https://gitee.com/nmdfzf404/company-work01)\n\n  ![image-20210921211154380](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/202109212111747.png)\n\n- Vue3 + Vite + NaiveUI\n\n  > [作品推荐](http://favor.fzf404.art/)\n  >\n  > [源码](https://github.com/fzf404/favor)\n\n  ```js\n  // pug模板语法\n  .content\n    n-h1.title\n      | 作品推荐\n    div(v-for="(item, key) in data", style="padding-top: 2rem", :id="key")\n      n-h2.box-header(prefix="bar", :type="item[\'color\']")\n        n-text(:type="item[\'color\']")\n          | {{ key }}\n        span.sub-title\n          | {{ item[\'description\'] }}\n      n-grid(cols="1 s:2 m:3 l:4 xl:4 2xl:5", responsive="screen")\n        n-grid-item.card-normal(v-for="i in item[\'list\']")\n          n-card.card-item(hoverable)\n            template(#cover)\n              n-image.card-img(\n                :src="i[\'image\']",\n                height="240",\n                show-toolbar=false\n              )\n  ```\n\n- React + Taro\n\n  > 微信小程序\n  >\n  > 腾讯云开发\n  >\n  > 源码未开放...\n\n  <img src="https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/20210602201233.jpg" style="zoom: 67%;" />\n\n- Three.js\n\n  > [旋转立方体](https://demo.fzf404.art/three.js/)\n  >\n  > [源码](https://github.com/fzf404/demo/tree/main/three.js)\n\n## 后端\n\n- Go + Gin\n\n  > [Opus 源码](https://github.com/fzf404/Opus)\n\n  ```go\n  func Login(ctx *gin.Context) {\n  \tdb := database.GetDB()\n\n  \t//获取数据\n  \tname := ctx.PostForm("name")\n  \tpassword := ctx.PostForm("password")\n\n  \t// 判断密码\n  \tif len(password) < 6 || len(password) > 16 {\n  \t\tresponse.Fail(ctx, nil, "密码错误")\n  \t\treturn\n  \t}\n\n  \t// 判断用户是否存在\n  \tvar user model.User\n  \tdb.Where("name = ?", name).First(&user)\n  \t// 用户名判断\n  \tif user.ID == 0 {\n  \t\t// 邮箱判断\n  \t\tdb.Where("email = ?", name).First(&user)\n  \t\tif user.ID == 0 {\n  \t\t\tresponse.Fail(ctx, nil, "用户名或密码错误")\n  \t\t\treturn\n  \t\t}\n  \t}\n  \tif err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {\n  \t\tresponse.Fail(ctx, nil, "用户名或密码错误")\n  \t\treturn\n  \t}\n\n  \t// 分发Token\n  \ttoken, err := middleware.ReleaseToken(user)\n  \tif err != nil {\n  \t\tresponse.Response(ctx, http.StatusInternalServerError, 500, nil, "Token发放失败")\n  \t\tlog.Print("token generate error:", err)\n  \t\treturn\n  \t}\n\n  \tresponse.Success(ctx, gin.H{"token": token}, "登陆成功")\n\n  }\n  ```\n\n- Node + Express\n\n  > [Template 源码](https://github.com/fzf404/ExpressTemp)\n\n- Node + Nestjs + TypeScript\n\n  > [Template 源码](https://github.com/fzf404/nest-template)\n\n  ```js\n  /**\n   * @description: 用户登录\n   * @param {User} user\n   * @return {*}\n   */\n  public async login(user: User) {\n    const username = user.username;\n    const password = user.password;\n    return await this.validateUser(user)\n      .then((res) => {\n        if (res.length == 0) {\n          throw (this.response = {\n            code: 403,\n            msg: \'用户名或密码错误\',\n            data: { username: username },\n          });\n        }\n        return res[0];\n      })\n      .then(async (dbUser: User) => {\n        const pass = encript(password, dbUser.salt);\n        if (pass == dbUser.password) {\n          return (this.response = {\n            code: 200,\n            msg: \'登陆成功\',\n            data: { token: await this.createToken(user) },\n          });\n        } else {\n          throw (this.response = {\n            code: 403,\n            msg: \'用户名或密码错误\',\n            data: { username: username },\n          });\n        }\n      })\n      .catch((err) => err);\n  }\n  ```\n\n- Python + Django\n\n  > [Template 源码](https://github.com/fzf404/DjangoTemp)\n\n- Go + gRPC + Zero\n\n  > [gPRC-Template 源码](https://github.com/fzf404/go-grpc-demo)\n  >\n  > [go-zero](https://github.com/zeromicro/go-zero)\n\n  ```go\n  type (\n  \taddReq {\n  \t\tbook string `form:"book"`\n  \t\tprice int64 `form:"price"`\n  \t}\n\n  \taddResp {\n  \t\tok bool `json:"ok"`\n  \t}\n  )\n\n  type (\n  \tcheckReq {\n  \t\tbook string `form:"book"`\n  \t}\n\n  \tcheckResp {\n  \t\tfound bool `json:"found"`\n  \t\tprice int64 `json:"price"`\n  \t}\n  )\n\n  service bookstore-api {\n  \t@handler AddHandler\n  \tget /add (addReq) returns (addResp)\n\n  \t@handler CheckHandler\n  \tget /check (checkReq) returns (checkResp)\n  }\n  ```\n\n## 运维\n\n- WebHooks\n\n  > Golang 编写的 webhooks 部署工具\n  >\n  > [源码](https://github.com/fzf404/GoWebHooks)\n\n- Nginx、Tomcat、SQL 等基础搭建\n\n- Docker\n\n- gin + websocket\n\n  > 类似 Vercel 和 宝塔 的服务器应用管理系统\n  >\n  > 前后端自动化部署、webhooks、CI/CD\n  >\n  > [gin-socket 源码](https://github.com/fzf404/gin-socket)\n\n- K8S\n\n  > 了解一下[K8S](https://note.fzf404.art/#/Command/Server/K8S)\n\n- 尝试了一堆好用的工具\n\n  > i3wm、tmux、nvim...\n\n- [Shell 编程](https://note.fzf404.art/#/Command/Linux/10-Shell%E7%BC%96%E7%A8%8B)\n\n## 其他\n\n### 操作系统\n\n> 用 Nasm 汇编写操作系统\n>\n> 只写到 32 位保护模式\n>\n> [MiniSys 源码](https://github.com/fzf404/MiniSys)\n\n![image-20210204214823035](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/image-20210204214823035.png)\n\n### 机器学习\n\n- OpenCV\n\n  > 简单了解下\n  >\n  > [OpenCV](https://note.fzf404.art/#/Python/7.Vision/50-OpenCV)\n\n- MNIST\n\n  > 用 numpy 手写神经网络\n  >\n  > [Colab](https://colab.research.google.com/drive/1znMDwJh7MRGDCmN6Hc7UZnpBLfdamWDn?usp=sharing)\n\n  ```python\n  # 激活函数\n  def tanh(x):\n    return np.tanh(x)\n  def softmax(x):\n    exp=np.exp(x-x.max())\n    return exp/exp.sum()\n\n  # 激活函数求导\n  def d_softmax(data):\n    sm = softmax(data)\n    return np.diag(sm)-np.outer(sm,sm)\n  def d_tanh(data):\n    return 1/(np.cosh(data))**2\n  def d_bypass(x):\n    return 1\n  ```\n\n- 卷积神经网络\n\n  > [LeNet-5](https://colab.research.google.com/drive/1PfAehmIm6pHYe17oS0KzryAGEcb_r2g_?usp=sharing)\n  >\n  > [ResNet](https://colab.research.google.com/drive/1Iuk_TV7m2iOgts7BTDFMI8VpgyI16T82?usp=sharing)\n\n- yolo\n\n  ```bash\n  python train.py \\\n    --img 320 \\\t\t\t# 图像大小\n    --batch 16 \\\t\t# 组大小\n    --epochs 100 \\\t# 次数\n    --data /content/DataSet/fire/data.yaml \\\t# 训练数据\n    --cfg models/yolov5s.yaml\t\t# 预训练模型\n\n  # 运行模型\n  python detect.py --weights .\\best.pt --source <img/video/camera>\n  ```\n\n- GPT2\n\n  > [GPT2-Chinese](https://github.com/fzf404/GPT2-Chinese)\n  >\n  > 关键词：`修正主义`\n\n  ```\n  \t\t修正主义者即反对这种主张的人。他们认为，只要人性不是恶的，人身上就有不可克服的弱点，必须加以克服。\n  \t\t反对这种人生虚无主义的人，既没有生命力，也就是死亡的征兆，更谈不到智慧。契诃夫愿意自己的作品有血有肉，有激情，有创造，有欢乐，有悲壮。有这样的属于自己的全部优点的艺术，怎么能够叫做没有意义呢？他在创作自己的作品的时候，从不旁骛自己想要什么结果，也不预备什么结果。他一生只是在创造他自己要创造的那样的属于他自己的特殊的执着的生命，他不为他的生命的没有意义而苦恼，他没有这样的苦恼，因而也就有了创造他要表现的生命不是一般的生命，不是世俗的生命，而是精神的生命。\n  \t\t在他出生前，早已有了一些波动，他得先有了这样的生命力，才可能有了他自己。那么，他对现实生活有怎样的感觉呢？他始终是冷静的，顽强的。他的感觉是那样强烈，那样强烈，有时竟至使他顾而不见。他对他不满意这里的一切，但是他永远也不曾像别人指出应该作哪样的改革，或者应该避开哪样的事情。\n  \t\t他对人生是始终热爱的，永远是充满着激情的。他甚至在自己给自己的一封信中也写道如果你们想接受我这不同于常人的激情，如果你们想从我这里学习什么东西，请不要犹豫，因为我会给你们想要学习的东西！在这方面，他不仅有着强烈的激情，而且有着坚强的意志。他不相信别人可以骗得了他，他有着致命的决心。他一生致力于他的工作，但他决不向别人低估他的工作的难能可贵。\n  \t\t当他充满着激情拥抱着生命时，他是快乐的，是充满着力量的。因此，即使他面对着许多人低估了他的力量时，他充满了力量的自信的面容是会给他们一个致命的打击的。锻炼自己的生命力，即使是不充足的地方，也将给你带来充足的力量。这样的力量足以战胜任何困难。\n  \t\t苦闷的象征，文艺论文集，日本厨川白村著，一九三三年七月出版。译文月刊，周渊编辑，一九三六年七月创刊于上海，为期一个月。译文社编辑，一九三七年九月创刊于北京，为期十一个月。收入我们的文学集，附录周扬的文学战线编的文学战线的撰稿者和代表。\n  ```\n\n- RL 强化学习\n\n  > 大概了解了下\n  >\n  > [强化学习走迷宫](https://github.com/fzf404/Old_Code/tree/main/Python/RL/maze)\n\n  ![image-20210922210015748](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/202109222100783.png)\n\n- 目标跟踪\n\n  > [FairMOT](https://github.com/ifzhang/FairMOT)\n  >\n  > [AutoTrfcCtrl](https://gitee.com/nmdfzf404/auto-trfc-ctrl/tree/master/)\n\n  ![image-20210921220521155](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/202109212205534.png)\n\n- DouZero\n\n  > [AI 斗地主](https://github.com/Vincentzyx/DouZero_For_HLDDZ_FullAuto)\n\n### 逆向\n\n> Qt5 写的 XP 扫雷外挂\n\n<img src="https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/20210504113309.png" alt="image-20210504113307955" style="zoom:80%;" />\n\n<img src="https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/20210504112935.png" style="zoom:80%;" />\n\n### 安卓\n\n> 一个老师的项目，500 块钱\n\n<img src="https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/202109212223132.jpg" alt="img" style="zoom: 50%;" />\n\n### 硬件\n\n- stm32\n\n  > 没学多少\n\n- 画板\n\n  > 没画几个\n\n- 航模\n\n  > 坠机好几次\n\n## 未来\n\n- 新生通识课\n\n  > [share](https://share.fzf404.art/)\n\n- 工作室服务器重置\n\n- 运维新生培训\n\n- gin + websocket\n\n  > 类似 Vercel 和 宝塔 的服务器应用管理系统\n'}}]);