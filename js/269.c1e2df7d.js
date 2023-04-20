(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{897:function(n,e){n.exports='\x3c!--\ntitle: Appium\nsort:\n--\x3e\n\n> 安卓自动化测试\n\n## 安装\n\n1. `pip install appium`\n\n2. Android SDK\n\n3. [JDK1.8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)\n\n4. [Appium](http://appium.io/)\n\n   > 修改设置\n\n## 使用\n\n> 点击`Start Inspector Session`，获得布局信息\n\n```json\n{\n  "platformName": "Android",\n  "platformVersion": "10",\n  "deviceName": "mi",\n  "appPackage": "tv.danmaku.bili",\n  "appActivity": ".ui.splash.SplashActivity",\n  "unicodeKeyboard": true,\n  "resetKeyboard": true,\n  "noReset": true,\n  "newCommandTimeout": 6000,\n  "automationName": "UiAutomator2"\n}\n```\n\n> `expand_search`: 搜索框 ID\n\n```python\nfrom appium import webdriver\n# 初始化参数\ndesired_caps = {\n    \'platformName\': \'Android\',\n    \'platformVersion\': \'10\',\n    \'deviceName\': \'mi\',  # 设备名\n    \'appPackage\': \'tv.danmaku.bili\',  # 启动Package\n    \'appActivity\': \'.ui.splash.SplashActivity\',  # 启动Activity\n    \'unicodeKeyboard\': True,  # 使用默认Unicode输入法\n    \'resetKeyboard\': True,  # 结束后恢复默认输入法\n    \'noReset\': True,  # 执行后不重置App\n    \'newCommandTimeout\': 6000,\n    \'automationName\': \'UiAutomator2\'\n}\n# 初始化连接Appium Server\ndriver = webdriver.Remote(\'http://localhost:4723/wd/hub\', desired_caps)\n# 设置等待延时\ndriver.implicitly_wait(5)\n# 点击搜索框\ndriver.find_element_by_id("expand_search").click()\ndriver.find_element_by_id("search_src_text").send_keys("咒术回战")\n# 回车\ndriver.keyevent(66)\n# 点击播放按钮\ndriver.find_element_by_id("play_button").click()\n# 退出\n# driver.quit()\n```\n'}}]);