(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{722:function(n,e){n.exports='\x3c!--\ntitle: 09-Vue实战\nsort:\n--\x3e\n\n```bash\nnpm install -g vue-cli\nvue init webpack demo\nyarn install sass-loader@7.3.1 node-sass@4.14.1 --save-dev\n```\n\n## 步骤\n\n1. 编辑页面: `/src/pages/Home.vue`\n\n```js\n<template>\n  <div>\n    <div class="title">\n      <h1>{{ msg }}</h1>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'home\',\n  data () {\n    return {\n      msg: \'Welcome to Your Vue.js App\'\n    }\n  }\n}\n<\/script>\n```\n\n2. 配置路由: `/src/router/index.js`\n\n```js\nimport Vue from "vue";\nimport Router from "vue-router";\nimport store from "@/store";\nimport userRoutes from "./module/user";\n\nVue.use(Router);\n\nconst routes = [\n  {\n    path: "/",\n    name: "Home",\n    component: () => import("../pages/Home.vue"),\n  },\n  ...muserRoutes,\n  {\n    path: "*",\n    name: "404",\n    component: () => import("../pages/404.vue"),\n  },\n];\n\nconst router = new Router({\n  routes,\n});\nrouter.beforeEach((to, from, next) => {\n  if (to.meta.auth) {\n    if (store.state.userModule.token) {\n      next();\n    } else {\n      router.push({ name: "Home" });\n    }\n  } else {\n    next();\n  }\n});\n\nexport default router;\n```\n\n`/src/router/module/user.js`\n\n```js\nconst manageRoutes = [\n  {\n    path: "/login",\n    name: "Login",\n    component: () => import("@/pages/Login.vue"),\n  },\n  {\n    path: "/info",\n    name: "Info",\n    meta: {\n      auth: true,\n    },\n    component: () => import("@/pages/Info.vue"),\n  },\n];\n\nexport default manageRoutes;\n```\n\n3. 首页链接: `/src/app.vue`\n\n```vue\n<nav>\n  <div class="container">\n    <ul class="nav_left">\n      <li>\n        <router-link to="/">Home</router-link>\n      </li>\n      <li>\n        <router-link to="/login">Login</router-link>\n      </li>\n    </ul>\n  </div>\n</nav>\n```\n\n4. 编写 reuqest: `/src/utils/request.js`\n\n```js\nimport axios from "axios";\nimport storageService from "../service/storageService";\n\nconst service = axios.create({\n  baseURL: "/api",\n  timeout: 1000 * 3,\n});\n// 使用中间件\nservice.interceptors.request.use(\n  (config) => {\n    Object.assign(config.headers, {\n      Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}`,\n    });\n    return config;\n  },\n  (error) => Promise.reject(error)\n);\n\nexport default service;\n```\n\n5. 编写 Service: `/src/service/userService.js`\n\n```js\nimport request from "@/utils/request.js";\nimport qs from "qs";\n\n// 用户登录\nconst login = ({ name, password }) =>\n  request.post("login", qs.stringify({ name, password }));\n// 获取用户信息\nconst info = () => request.post("userinfo");\nexport default {\n  login,\n  info,\n};\n```\n\n6. 编写 Store: `/src/store/index.js`\n\n```js\nimport Vue from "vue";\nimport Vuex from "vuex";\nimport userModule from "./module/user";\n\nVue.use(Vuex);\n\nexport default new Vuex.Store({\n  strict: process.env.NODE_ENV !== "production",\n  state: {},\n  mutations: {},\n  actions: {},\n  modules: {\n    userModule,\n  },\n});\n```\n\n`/src/store/module/user.js`\n\n```js\nimport storageService from \'@/service/storageService\'\nimport userService from \'@/service/userService\'\n\nconst userModule = {\n  namespaced: true,\n  state: {\n    token: storageService.get(storageService.USER_TOKEN),\n    userInfo: storageService.get(storageService.USER_INFO) ? JSON.parse(storageService.get(storageService.USER_INFO)) : null, //eslint-disable-line\n  },\n  mutations: {\n    SET_TOKEN (state, token) {\n      // 更新本地缓存\n      storageService.set(storageService.USER_TOKEN, token)\n      // 更新state\n      state.token = token\n    },\n    SET_USERINFO (state, userInfo) {\n      // 更新本地缓存\n      storageService.set(storageService.USER_INFO, JSON.stringify(userInfo))\n      // 更新state\n      state.userInfo = userInfo\n    }\n  },\n  actions: {\n\n    login (context, { name, password }) {\n      return new Promise((resolve, reject) => {\n\n          /userService.login({ name, password }).then((res) => {\n          // 判断登录状态\n          alert(res.data.msg)\n          if (res.data.code !== 200) {\n            return\n          }\n          // 保存token\n          context.commit(\'SET_TOKEN\', res.data.data.token)\n          // 获取用户和信息\n          return userService.info()\n        }).then((res) => {\n          // 保存用户信息\n          context.commit(\'SET_USERINFO\', res.data.data.user)\n          resolve(res)\n        }).catch((err) => {\n          reject(err)\n        })\n      })\n    },\n    getuserinfo () {\n      return this.state.userInfo\n    },\n    logout ({ commit }) {\n      // 清除token\n      commit(\'SET_TOKEN\', \'\')\n      storageService.set(storageService.USER_TOKEN, \'\')\n      // 清除用户信息\n      commit(\'SET_USERINFO\', \'\')\n      storageService.set(storageService.USER_INFO, \'\')\n\n      window.location.reload()\n    }\n  }\n}\n\nexport default userModule\n\n```\n'}}]);