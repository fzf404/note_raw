(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{848:function(n,r){n.exports='\x3c!--\ntitle: 10-Proto入门\nsort:\n--\x3e\n\n## gRPC\n\n### 安装\n\n> [protoc](https://github.com/protocolbuffers/protobuf)\n\n```bash\n# vscode 插件\napt install clang-format\nvscode -> clang-format / vscode-proto3\n\n# Go语言\ngo get -u github.com/golang/protobuf/protoc-gen-go\nset PATH = "/root/go/bin" $PATH\t\t# 设置环境变量\n\n\n# 其他语言\nwget https://github.com/protocolbuffers/protobuf/releases/download/v3.17.3/protoc-3.17.3-linux-x86_64.zip\nset PATH = "/opt/protoc/bin" $PATH\n```\n\n### 开始\n\n```protobuf\n// proto/person.proto\nsyntax = "proto3";\n\noption go_package = "./protoc";\n\nmessage FirstMessage {\n  int32 id = 1;\n  string name = 2;\n  bool is_male = 3;\n}\n\n// 编译\nprotoc --go_out=. proto/person.proto\n```\n\n```go\n// 使用\nfunc NewPersonMessage() {\n\tpm := protoc.PersonMessage{\n\t\tId:     1,\n\t\tName:   "fzf404",\n\t\tIsMale: true,\n\t}\n\tprintln(pm.GetName())\n}\n```\n\n### 保存与写入\n\n> `google.golang.org/protobuf/proto`\n>\n> 将 proto 生成的结构体保存至文件\n\n```go\n// 读取二进制文件\nfunc readFromFile(fileName string, pb proto.Message) error {\n\t// 读取文件\n\tdataBytes, err := ioutil.ReadFile(fileName)\n\tif err != nil {\n\t\tlog.Fatalln("Read File Error: ", err.Error())\n\t}\n\t// 转换为结构踢\n\terr = proto.Unmarshal(dataBytes, pb)\n\tif err != nil {\n\t\tlog.Fatalln("Struct Transform Error: ", err.Error())\n\t}\n\treturn err\n}\n\n// 保存至二进制文件\nfunc writeToFile(fileName string, pb proto.Message) error {\n\t// 转换为二进制\n\tdataBytes, err := proto.Marshal(pb)\n\tif err != nil {\n\t\tlog.Fatalln("To Bytes Error: ", err.Error())\n\t}\n\n\t// 写入文件\n\tif err := ioutil.WriteFile(fileName, dataBytes, 0644); err != nil {\n\t\tlog.Fatalln("Can\'t Write Error: ", err.Error())\n\t}\n\n\tlog.Println("Success Write In: ", fileName)\n\n\treturn err\n}\n```\n\n### Json 转换\n\n> `google.golang.org/protobuf/encoding/protojson`\n>\n> proto 与 json 的互转\n\n```go\n// 转为JSON\nfunc toJson(pb proto.Message) string {\n\tmarshaler := protojson.MarshalOptions{\n\t\tIndent: "\t", // 格式化占位符\n\t\tUseProtoNames:   true, // 使用proto名称\n\t\tEmitUnpopulated: true, // 未定义字段填充\n\t}\n\n\tstr, err := marshaler.Marshal(pb)\n\tif err != nil {\n\t\tlog.Fatalln("To Json Error: ", err.Error())\n\t}\n\treturn string(str)\n}\n\n// 转为Proto\nfunc fromJSON(in string, pb proto.Message) error {\n\terr := protojson.Unmarshal([]byte(in), pb)\n\tif err != nil {\n\t\tlog.Fatalln("Json To Proto Error: ", err.Error())\n\t}\n\treturn err\n}\n```\n\n### 枚举\n\n> 使用`Gender_xxx`来定义。\n'}}]);