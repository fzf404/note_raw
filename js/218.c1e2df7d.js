(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{846:function(t,e){t.exports='\x3c!--\ntitle: 07-单元测试\nsort:\n--\x3e\n\n## Testify\n\n```go\nassert := assert.New(t)\n\nw := test.Get("/ping", router)\nassert.Equal(200, w.Code)\nassert.Equal("pong", w.Body.String())\n```\n\n## Utils\n\n```go\n// map => query\nfunc ParseToStr(mp map[string]string) string {\n\tvalues := ""\n\tfor key, val := range mp {\n\t\tvalues += "&" + key + "=" + val\n\t}\n\ttemp := values[1:]\n\tvalues = "?" + temp\n\treturn values\n}\n\nfunc Get(url string, router *gin.Engine) *httptest.ResponseRecorder {\n\t// 构造请求\n\treq := httptest.NewRequest("GET", url, nil)\n\t// 初始化响应\n\tw := httptest.NewRecorder()\n\t// 调用接口\n\trouter.ServeHTTP(w, req)\n\treturn w\n}\n\n// form-data\nfunc PostForm(url string, formData map[string]string, router *gin.Engine) *httptest.ResponseRecorder {\n\t// 创建表单\n\tbuf := new(bytes.Buffer)\n\tmw := multipart.NewWriter(buf)\n\tfor key, value := range formData {\n\t\tmw.WriteField(key, value)\n\t}\n\tmw.Close()\n\n\treq := httptest.NewRequest("POST", url, buf)\n\treq.Header.Set("Content-Type", mw.FormDataContentType())\n\tw := httptest.NewRecorder()\n\trouter.ServeHTTP(w, req)\n\treturn w\n}\n\n// form-urlencoded\nfunc PostEncoded(url string, fromEncoded url.Values, router *gin.Engine) *httptest.ResponseRecorder {\n\treq := httptest.NewRequest("POST", url, strings.NewReader(fromEncoded.Encode()))\n\treq.Header.Add("Content-Type", "application/x-www-form-urlencoded")\n\tw := httptest.NewRecorder()\n\trouter.ServeHTTP(w, req)\n\treturn w\n}\n\n// json\nfunc PostJson(url string, param map[string]interface{}, router *gin.Engine) *httptest.ResponseRecorder {\n\t// 转换为byte\n\tjsonByte, _ := json.Marshal(param)\n\n\treq := httptest.NewRequest("POST", url, bytes.NewReader(jsonByte))\n\tw := httptest.NewRecorder()\n\trouter.ServeHTTP(w, req)\n\treturn w\n}\n```\n'}}]);