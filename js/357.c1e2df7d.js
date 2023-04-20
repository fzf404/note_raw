(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{985:function(n,e){n.exports='\x3c!--\ntitle: Cmake\nsort:\n--\x3e\n\n## HelloWorld\n\n> main.cpp\n\n```cpp\n#include <iostream>\n\nint main(int argc, char *argv[])\n{\n   std::cout << "Hello CMake!" << std::endl;\n   return 0;\n}\n```\n\n> CMakeLists.txt\n\n```cmake\ncmake_minimum_required(VERSION 2.6)\t# 设置CMake最小版本\nproject (hello_cmake)\t# 工程名\nadd_executable(${PROJECT_NAME} main.cpp)\t# 生成可执行文件,执行文件名称为工程名\n```\n\n```bash\n# 构建\nmkdir build\ncd build/\ncmake ..\n```\n\n## 包含头文件\n\n| 变量名                   | 信息                                                         |\n| :----------------------- | :----------------------------------------------------------- |\n| CMAKE_SOURCE_DIR         | 根源代码目录，工程顶层目录。暂认为就是 PROJECT_SOURCE_DIR    |\n| CMAKE_CURRENT_SOURCE_DIR | 当前处理的 CMakeLists.txt 所在的路径                         |\n| PROJECT_SOURCE_DIR       | 工程顶层目录                                                 |\n| CMAKE_BINARY_DIR         | 运行 cmake 的目录。外部构建时就是 build 目录                 |\n| CMAKE_CURRENT_BINARY_DIR | The build directory you are currently in.当前所在 build 目录 |\n| PROJECT_BINARY_DIR       | 暂认为就是 CMAKE_BINARY_DIR                                  |\n\n### 文件树\n\n```bash\n├── CMakeLists.txt\n├── include\n│   └── Hello.h\n└── src\n    ├── Hello.cpp\n    └── main.cpp\n```\n\nCMakeLists.txt\n\n```cmake\ncmake_minimum_required(VERSION 3.5)\n\n# Set the project name\nproject (hello_headers)\n\n# 需要编译cpp文件列表\nset(SOURCES\n    src/Hello.cpp\n    src/main.cpp\n)\n\n# 所有的源文件生成一个可执行文件\nadd_executable(hello_headers ${SOURCES})\n\n# 包含的库的路径\ntarget_include_directories(hello_headers\n    PRIVATE\n        ${PROJECT_SOURCE_DIR}/include\n)\n```\n\n构建\n\n```bash\n# 构建\nmkdir build\ncd build/\ncmake ..\nmake\n```\n'}}]);