(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{710:function(n,e){n.exports="\x3c!--\ntitle: 21-Taro调用API\nsort:\n--\x3e\n\n## 基础\n\n### 跳转\n\n```react\n// 直接跳转\nTaro.redirectTo({\n  url: '/pages/reserve/index'\n})\n\n// 当前界面跳转\nTaro.navigateTo({\n  url: '/pages/calendar/index'\n})\n\n// 向前一个页面写入数据\nTaro.getCurrentPages()[0].setData({\n  data: this.state.,\n})\n\n// 跳回前一个页面\nTaro.navigateBack({\n  delta: 1\n})\n```\n\n### 存储\n\n```react\n// 存储\nTaro.setStorage({\n  key: \"userInfo\",\n  data: res.userInfo\n})\n\n// 读取\nTaro.getStorage({\n  key: 'openId'\n})\n```\n\n## 云开发\n\n### 开发云函数\n\n```js\nconst cloud = require(\"wx-server-sdk\");\n// 初始化\ncloud.init({\n  env: cloud.DYNAMIC_CURRENT_ENV,\n});\n\nexports.main = async (event, context) => {\n  const { OPENID } = cloud.getWXContext();\n\n  return {\n    code: 200,\n    msg: \"获取成功\",\n    openId: OPENID,\n  };\n};\n```\n\n### 调用云函数\n\n```react\nTaro.cloud\n  .callFunction({\n    name: \"login\",\n    data: {\n      userName: 'fzf404'\n    }\n  })\n  .then(res => {\n      console.log(data: res.result.openId)\n  })\n```\n\n### 数据库\n\n```react\n// 小程序端调用数据库\nconst userDB = Taro.cloud.database().collection('user')\nawait userDB.where({\n  _openid: openId\n}).get({\n  success: (res) => {\n    console.log(res.data[0].openid)\n  },\n})\n\n// 服务端调用数据库\nconst cloud = require('wx-server-sdk')\n// 初始化\ncloud.init({\n\tenv: cloud.DYNAMIC_CURRENT_ENV\n})\nconst userDB = cloud.database().collection('users')\nexports.main = async (event, context) => {\n  const usersInfo =  await userDB.where({\n    date: date,\n  }).get()\n}\n```\n\n### 数据库 API\n\n```js\nconst _ = db.command;\n\n// 查询date大于当前时间的数据\nconst data = await scheduleDB\n  .where({\n    date: _.gte(parseInt(dayjs().format(\"YYYYMMDD\"))),\n  })\n  .get({});\n\n// 删除date小于当前时间的数据\nawait scheduleDB\n  .where({\n    date: _.lte(parseInt(dayjs().format(\"YYYYMMDD\"))),\n  })\n  .remove({});\n\n// 更新, point字段自增\nconst userUpdate = await userDB\n  .where({\n    _openid: OPENID,\n  })\n  .update({\n    data: {\n      point: _.inc(1),\n    },\n  });\n```\n"}}]);