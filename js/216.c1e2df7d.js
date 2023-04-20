(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{844:function(n,t){n.exports='\x3c!--\ntitle: 05-第三方库\nsort:\n--\x3e\n\n## Viper\n\n> 配置解决方案\n>\n> 支持多种格式\n>\n> `go get github.com/spf13/viper`\n\n```go\nfunc InitConfig() {\n\t// 设置配置文件信息\n\tviper.SetConfigName("config")\n\tviper.SetConfigType("yaml")\n\t// 搜索路径\n\tviper.AddConfigPath("./config")\n\t// 自动根据类型来读取配置\n\terr := viper.ReadInConfig()\n\tif err != nil {\n\t\tlog.Fatal("read config failed: ", err)\n\t}\n\t// 读取信息\n\tviper.Get("mysql.host")\n\t// 设置值\n\tviper.Set("redis.port", 5381)\n\tviper.WriteConfig()\n    // 自动重新加载配置文件\n    viper.WatchConfig()\n}\n```\n\n## base64Captcha\n\n> 图形验证码\n\n```go\npackage captcha\n\nimport (\n\t"log"\n\n\t"github.com/mojocn/base64Captcha"\n)\n\nvar store base64Captcha.Store\n\n/**\n * @description: 初始化验证码模块\n * @param {*}\n * @return {*}\n */\nfunc InitCaptcha() base64Captcha.Store {\n\tstore = base64Captcha.DefaultMemStore\n\treturn store\n}\n\n/**\n * @description: 生成验证码\n * @param {*}\n * @return {*}\n */\nfunc GenerateCaptcha() (string, string) {\n\tdriver := base64Captcha.DriverString{\n\t\tLength: 4,\n\t\tSource: "1234567890qwertyuioplkjhgfdsazxcvbnm",\n\t\tWidth:  160,\n\t\tHeight: 60,\n\t}\n\tcaptcha := base64Captcha.NewCaptcha(&driver, store)\n\tcaptId, captBase64, err := captcha.Generate()\n\n\tif err != nil {\n\t\tlog.Fatal("Captcha Generate Error: ", err)\n\t}\n\treturn captId, captBase64\n}\n\n/**\n * @description:验证验证码\n * @param {string} captId\n * @param {string} captValue\n * @return {*}\n */\nfunc VerifyCaptcha(captId string, captValue string) bool {\n\tif len(captId) == 0 || len(captValue) == 0 {\n\t\treturn false\n\t}\n\treturn store.Verify(captId, captValue, true)\n}\n\n```\n\n## Gorm2\n\n> 快速入门\n>\n> `go get gorm.io/gorm`\n\n```go\npackage main\n\nimport (\n  "gorm.io/gorm"\n  "gorm.io/driver/sqlite"\n)\n// 数据表模型\ntype User struct {\n  gorm.Model\n  Name string\n  Email string\n  Password string\n}\n\nfunc main() {\n  // 连接数据库\n  db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})\n  if err != nil {\n    panic("failed to connect database")\n  }\n\n  // 自动创建表\n  db.AutoMigrate(&User{})\n\n  // 创建表\n  db.Create(&User{Name: "fzf", Email: "110@zh.cn", password: "12#$"})\n\n  // 读取表，传给新建的newUser\n  var newUser User\n  db.First(&newUser, 1) // 根据主键ID查找\n  db.First(&newUser, "name = ?", "fzf") // 查找 name 为 fzf 的字段\n  // 使用Where筛选\n  DB.Where("name = ?", name).First(&user)\n  var user User\n  var users []User\n  // 全部\n  DB.Where("name = ?", name).Find(&users)\n  // 模糊查询\n\tdb.Where("name LIKE ?", "%"+name+"%").Find(&users)\n\n  // Update - 将 newUser 的 price 更新为 200\n  db.Model(&newUser).Update("Password", "1234")\n  // Update - 更新多个字段\n  db.Model(&newUser).Updates(User{Name: "fzf404",Password: "1234"})\n  // 仅更新非零值字段\n  db.Model(&newUser).Updates(map[string]interface{}{Name: "fzf404",Password: "1234"})\n\n  // 删除user中主键对应的表\n  db.Delete(&user)\n\t// 删除id=20的表\n\tdb.Delete(&model.User, 20)\n\n  // 修改表\n  db.Save(&user)\n}\n```\n\n### 连接数据库\n\n> `go get gorm.io/driver/mysql`\n>\n> gorm2 无需关闭手动延迟关闭\n\n```go\nargs := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=true",\n\t\tusername,\n\t\tpassword,\n\t\thost,\n\t\tport,\n\t\tdatabase,\n\t\tcharset,\n\t)\nfmt.Printf(args)\ndb, err := gorm.Open(mysql.Open(args), &gorm.Config{})\nif err != nil {\n  panic("failed to connect database, err: ", err.Error())\n}\n```\n\n## Gin\n\n> `go get -u github.com/gin-gonic/gin`\n\n```go\n//\n\tr := gin.Default()\n\tr.GET("/ping", func(c *gin.Context) {\n\t\tc.JSON(200, gin.H{\n\t\t\t"message": "pong",\n\t\t})\n\t})\n\tr.Run() // listen and serve on 0.0.0.0:8080\n}\nname := c.Query("lastname")\t\t// Get参数\nname := ctx.PostForm("name")\t// from-data参数\n\n```\n\n## bcypt\n\n> `go get golang.org/x/crypto/bcrypt`\n\n## net\n\n- http\n\n```go\nresp, err := http.Get(url)\nif err != nil {\n  log.Print("HTTP GET ERROR", err)\n  return\n}\nraw, err := ioutil.ReadAll(resp.Body)\n```\n'}}]);