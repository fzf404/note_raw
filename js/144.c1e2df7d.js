(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{772:function(n,e){n.exports="\x3c!--\ntitle: 00-Esp8266入门\nsort:\n--\x3e\n\n## Vscode\n\n- 编辑器：`Vscode`\n- 插件：`PlatformIO`\n- Board：`NodeMCU 1.0`\n\n## LED\n\n```cpp\n#include <Arduino.h>\n\nvoid setup() {\n  // put your setup code here, to run once:\n  pinMode(LED_BUILTIN, OUTPUT);\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n  delay(500);\n  digitalWrite(LED_BUILTIN,!digitalRead(LED_BUILTIN));\n}\n```\n\n"}}]);