(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{863:function(n,r){n.exports='\x3c!--\ntitle: 01-Rust入门\nsort:\n--\x3e\n\n## 安装\n\n[安装文档](https://www.rust-lang.org/tools/install)\n\n```bash\n# Rust及其附加工具管理\nrustup show # 当前安装的\nrustup update # 更新\nrustup doc # 本地文档\nrustup install stable/1.59 # 安装稳定/1.59版本\n\n# 编译器\nrustc --version # 版本\n```\n\n## Cargo\n\n> [包管理器](https://crates.io/)\n>\n> [安装](https://doc.rust-lang.org/cargo/getting-started/installation.html)\n\n```bash\ncargo init # 在当前目录初始化项目\ncargo new hello_cargo # 初始化项目\n\ncargo install # 全局安装\ncargo publish # 发布包\n\ncargo check # 检查语法错误\ncargo test # 测试\n\ncargo build # 编译\ncargo build --release # 发布编译\ncargo run # 编译并执行\n\ncargo doc # 查看依赖文档\n\n# 附加命令\ncargo install cargo-edit # 增加功能\ncargo add # 安装依赖\ncargo rm # 删除依赖\n\n# 宏展开\nrustup install nightly\ncargo install cargo-expand\ncargo expand main # 查看编译生成的源代码\n```\n\n## 语法\n\n### HelloWorld\n\n```rust\nfn main(){\n  println!("{} World", "Hello");\n}\n\n// 编译\nrustc main.rs\n./main\n```\n\n### 基础\n\n```rust\n// 标量\nlet demo: i16 = 40404;        // 有符号\nlet demo = 40404u16;            // 无符号\n// 可变变量 字符串切片 &str\nlet mut demo = "String";\n\n// 常量\nconst MILLION = 1_000_000;\n\n// 数据类型\nlet byte = b\'A\'        // byte类型\n\n// 元组\nlet tup: (i32, f32, u8) = (404, 3.14, 1);\n// 数组\nlet week = [1,2,3,4,5,6,0];\n\n// 条件分支\nif x == 0 {\n    println!("True");\n} else if x == 1 {\n    println!("False");\n} else {\n    println!("Error")\n}\n// 数组遍历\nfor day in week.iter() {\n    println!("{}", day)\n}\n// range, 翻转\nfor number in (1..10).rev() {\n    println!("{}", number)\n}\n\n// 循环\nloop {\n  break;\n}\n\nwhile stop == true {\n\n}\n\n// 函数名(参数)->f\nfn get_lens(s: &String) -> usize {\n    s.len()\n}\n```\n\n### 字符串\n\n```rust\nlet mut s = String::from("fzf");\nlet s2 = String::from("404");\ns.push_str(&s2); // 向字符串添加字符串切片\n//  s.push_str("40");   // 直接添加\ns.push(\'4\')         // 添加字符\n\n// 字符串拼接\nlet s3 = s + &s2;\nformat!("{}-{}",s,s2);\n\n// 替换\ns = s.replace("world", "Rust");\n\n// 字符串切片 中文需要按字节数\nlet cs = &s[0..1];\n\n// 遍历\nlet s = String::from("降 弓 用 刑");\nfor w in s.chars() {\n  println!("{}", w);\n}\nfor w in s.bs() {\n  println!("{}", w);\n}\n```\n\n### 使用\n\n```rust\n// 获得输入\nlet mut input = String::new();\n// 错误处理\nstd::io::stdin().read_line(&mut input).expect("取得输入失败");\nprintln!("{}", input);\n\n// 字符串转数字\nlet input = input.trim().parse().expect("输入不为数字");\n\n// 比较\n// 类似Switch\nmatch input.cmp(&secret) {\n    Ordering::Less => println!("太小了"),\n    Ordering::Equal => println!("正好") ,\n    Ordering::Greater => println!("太大了"),\n}\n\n// 错误处理\nlet input = match input.trim().parse() {\n    Ok(num) => num,\n    Err(_) => {\n        println!("输入错误, 请重新输入: ");\n        continue;\n    }\n};\n```\n\n### 错误处理\n\n```rust\nuse std::fs::File;\nuse std::io::ErrorKind;\nfn open_file(path: &str) {\n    // 返回 Result<T,E>\n    let f = File::open(path);\n    // 捕捉错误\n    let f = match f {\n        Ok(file) => file,\n        // 捕捉错误类型\n        Err(error) => match error.kind() {\n            // 创建文件\n            ErrorKind::NotFound => match File::create(path) {\n                Ok(fc) => fc,\n                Err(e) => panic!("Failed to creating file: {:?}", e),\n            },\n            other_error => panic!("Failed to open file {:?}", other_error),\n        },\n    };\n}\n// 更简单的方法\nfn open_file2(path: &str) {\n    let f = File::open(path).unwrap_or_else(|error| {\n        if error.kind() == ErrorKind::NotFound {\n            File::create(path)\n                .unwrap_or_else(|error| panic!("Failed to creating file: {:?}", error))\n        } else {\n            panic!("Failed to open file {:?}", error)\n        }\n    });\n}\n// 不处理错误\nlet f = File::open(path).unwrap();\n// 捕获错误\nlet f = File::open(path).except("无法打开文件");\n// 语法糖 用于返回值是Result<_,_>的函数\nlet f = File::open(path)?;\nOk(f)\n```\n'}}]);