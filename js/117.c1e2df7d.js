(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{745:function(n,t){n.exports='\x3c!--\ntitle: 02-单片机例程\nsort:\n--\x3e\n\n# 51 例程\n\n## C 基础\n\n- typedef old new ;\n\n  > 定义新名称\n\n- #define new old\n\n  > 预处理命令\n\n- \\_crol\\_(a,b)\n\n  > 包含在`intrins.h`文件中\n  >\n  > 循环左移：a 是值,b 是位数\n  >\n  > \\_cror\\_(a,b)：循环右移\n\n## Keil 使用\n\n### debug\n\n1. 仿真\n\n![image-20200330184624331](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20200711105841.png)\n\n2. 设置断点\n\n![image-20200328195141119](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20200711105844.png)\n\n## 例程\n\n- LED 闪烁\n\n  ```c\n  #include "reg51.h"\n\n  sbit led = P0^0;\n  typedef unsigned char u8;\n  typedef unsigned int u16;\n\n  void delay(u16 i)\t\t// 延时函数\n  {\n    while(i--);\n  }\n\n  void main()\n  {\n    while(1)\n    {\n        led = 1;\n        delay(50000);\n            led = 0;\n        delay(50000);\n    }\n  }\n  ```\n\n- LED 流水灯\n\n  ```c\n  #include "reg51.h"\n\n  typedef unsigned char u8;\n  typedef unsigned int u16;\n\n  #define led P0\n\n  void delay(u16 i)\n  {\n  \twhile(i--);\n  }\n\n  void main()\n  {\n  \tu8 i = 0;\n  \tled = 0x01;\n  \tdelay(50000);\n  \twhile(1)\n  \t{\n  \t\tfor(i=0;i<7;i++)\n  \t\t{\n  \t\t\tled = (0x01<<i);\n  \t\t\t// led <<= 1;\t\t也可以这么写\n  \t\t\tdelay(50000);\n  \t\t}\n  \t\tfor(i=0;i<7;i++)\n  \t\t{\n  \t\t\tled = _cror_(led,1);\n  \t\t\tdelay(50000);\n  \t\t}\n  \t}\n  }\n  ```\n\n- 蜂鸣器&继电器\n\n  ```c\n  #include "reg51.h"\n  #include "intrins.h"\n\n  typedef unsigned char u8;\n  typedef unsigned int u16;\n\n  sbit beep=P1^5;\n\n  void delay(u16 i)\n  {\n  \twhile(i--);\n  }\n\n  void main()\n  {\n  \twhile(1)\n  \t{\n  \t\tbeep=~beep;\t\t// 低电平时闭合\n  \t\tdelay(10000);\n  \t}\n  }\n  ```\n\n- 静态数码管\n\n  ```c\n  #include "reg51.h"\n\n  typedef unsigned char u8;\n  typedef unsigned int u16;\n\n  u8 code smgduan[]={0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x7f,\n  \t\t\t\t0x6f,0x77,0x7c,0x39,0x5e,0x79,0x71};\t// 共阴\n  // code将值存入data数据中\n  void delay(u16 i)\n  {\n  \twhile(i--);\n  }\n\n  void main()\n  {\n  \tu8 i=0;\n  \tfor(i=0;i<16;i++)\n  \t{\n  \t\tP0=~smgduan[i];\n  \t\tdelay(100000);\n  \t}\n  }\n  ```\n\n- 动态数码管\n\n  ```c\n  #include "reg51.h"\n\n  typedef unsigned char u8;\n  typedef unsigned int u16;\n\n  sbit LSA=P2^2;\n  sbit LSB=P2^3;\n  sbit LSC=P2^4;\n\n  u8 code smgduan[]={0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x7f,\n  \t\t\t\t0x6f,0x77,0x7c,0x39,0x5e,0x79,0x71};\n\n  void delay(u16 i)\n  {\n  \twhile(i--);\n  }\n\n  void DigDisplay()\n  {\n  \tu8 i;\n  \tfor(i=0;i<8;i++)\n  \t{\n  \t\tswitch(i)\n  \t\t{\n  \t\t\tcase 0:\n  \t\t\t\tLSA=0;LSB=0;LSC=0;break;\n  \t\t\tcase 1:\n  \t\t\t\tLSA=1;LSB=0;LSC=0;break;\n  \t\t\tcase 2:\n  \t\t\t\tLSA=0;LSB=1;LSC=0;break;\n  \t\t\tcase 3:\n  \t\t\t\tLSA=1;LSB=1;LSC=0;break;\n  \t\t\tcase 4:\n  \t\t\t\tLSA=0;LSB=0;LSC=1;break;\n  \t\t\tcase 5:\n  \t\t\t\tLSA=1;LSB=0;LSC=1;break;\n  \t\t\tcase 6:\n  \t\t\t\tLSA=0;LSB=1;LSC=1;break;\n  \t\t\tcase 7:\n  \t\t\t\tLSA=1;LSB=1;LSC=1;break;\n  \t\t}\n  \t\tP0=smgduan[i];\n  \t\tdelay(100);\n  \t\tP0=0x00;\t\t// 清零\n  \t}\n  }\n\n  void main()\n  {\n  \twhile(1)\n  \t{\n  \t\tDigDisplay();\n  \t}\n  }\n  ```\n\n- 独立按键\n\n  ```c\n  #include "reg51.h"\n\n\n  typedef unsigned char u8;\n  typedef unsigned int u16;\n\n  u8 code smgduan[]={0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x7f,\n  \t\t\t\t0x6f,0x77,0x7c,0x39,0x5e,0x79,0x71};\n\n  void delay(u16 i)\n  {\n  \twhile(i--);\n  }\n\n  u8 keypros()\n  {\n  \twhile(1)\n  \t{\n  \t\tif(P1<0xff)\n  \t\t{\n  \t\t\tdelay(1000);\n  \t\t\tswitch(P1)\n  \t\t\t{\n  \t\t\t\tcase(0x7f):return 7;break;\n  \t\t\t\tcase(0xbf):return 6;break;\n  \t\t\t\tcase(0xdf):return 5;break;\n  \t\t\t\tcase(0xef):return 4;break;\n  \t\t\t\tcase(0xf7):return 3;break;\n  \t\t\t\tcase(0xfb):return 2;break;\n  \t\t\t\tcase(0xfd):return 1;break;\n  \t\t\t\tcase(0xfe):return 0;break;\n  \t\t\t}\n  \t\t}\n  \t}\n\n  }\n\n  void smg(u8 key)\n  {\n  \tP0=~smgduan[key];\n  }\n\n  void main()\n  {\n  \twhile(1)\n  \t\tsmg(keypros());\n  }\n  ```\n\n- 矩阵按键\n\n  ```c\n  #include "reg51.h"\n\n\n  typedef unsigned char u8;\n  typedef unsigned int u16;\n\n  #define GPIO_KEY P1\n  #define GPIO_DIG P0\n\n  u8 code smgduan[]={0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x7f,\n  \t\t\t\t0x6f,0x77,0x7c,0x39,0x5e,0x79,0x71};\n  u8 KeyValue;\n\n  void delay(u16 i)\n  {\n  \twhile(i--);\n  }\n\n  void KeyDown()\n  {\n  \tchar exit;\n  \tGPIO_KEY = 0x0f;\n  \tif(GPIO_KEY!=0x0f)\n  \t{\n  \t\tdelay(1000);\n  \t\tif(GPIO_KEY!=0x0f)\n  \t\t{\n  \t\t\tswitch(GPIO_KEY)\n  \t\t\t{\n  \t\t\t\tcase(0x07): KeyValue=3;break;\n  \t\t\t\tcase(0x0b): KeyValue=2;break;\n  \t\t\t\tcase(0x0d): KeyValue=1;break;\n  \t\t\t\tcase(0x0e): KeyValue=0;break;\n  \t\t\t}\n  \t\t\tGPIO_KEY = 0xf0;\n  \t\t\tswitch(GPIO_KEY)\n  \t\t\t{\n  \t\t\t\tcase(0x70): KeyValue+=12;break;\n  \t\t\t\tcase(0xb0): KeyValue+=8;break;\n  \t\t\t\tcase(0xd0): KeyValue+=4;break;\n  \t\t\t\tcase(0xe0): KeyValue=KeyValue;break;\n  \t\t\t}\n  \t\t\twhile((exit<50)&&(GPIO_KEY!=0xf0))\n  \t\t\t{\n  \t\t\t\tdelay(1000);\n  \t\t\t\texit++;\n  \t\t\t}\n  \t\t}\n  \t}\n  }\n\n\n  void main()\n  {\n  \twhile(1)\n  \t{\n  \t\tKeyDown();\n  \t\tGPIO_DIG = ~smgduan[KeyValue];\n  \t}\n\n  }\n  ```\n\n## 显示\n\n- 16\\*16 点阵\n\n  ```c\n  #include "reg51.h"\n  // _nop_();原型\n  #include "intrins.h"\n\n  typedef unsigned char u8;\n  typedef unsigned int u16;\n\n  sbit SRCLK = P3^6;\n  sbit RCLK = P3^5;\n  sbit SER = P3^4;\n\n  u8 code ledwei[]=\n  {\n  0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x80,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x01,0x02,0x04,0x08,0x10,0x20,0x40,\n  };\n\n  u8 code ledduan1[]=\n  {\n  /*--  文字:  █  --*/\n  /*--  宋体12;  此字体下对应的点阵为：宽x高=16x16   --*/\n  0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,\n  0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,\n  };\n\n  void delay(u16 i)\n  {\n      while(i--);\n  }\n\n  void Send595(u8 dat1, u8 dat2, u8 dat3, u8 dat4)\n  {\n  \tu8 a;\n  \tSRCLK=1;\n  \tRCLK=1;\n  \tfor(a=0;a<8;a++)\n  \t{\n  \t\tSER = dat1>>7;\n  \t\tdat1<<=1;\n\n  \t\tSRCLK=0;\n  \t\t_nop_();\n  \t\t_nop_();\n          SRCLK=1;\n  \t}\n  \tfor(a=0;a<8;a++)\n  \t{\n  \t\tSER = dat2>>7;\n  \t\tdat2<<=1;\n\n  \t\tSRCLK=0;\n  \t\t_nop_();\n  \t\t_nop_();\n          SRCLK=1;\n  \t}\n  \tfor(a=0;a<8;a++)\n  \t{\n  \t\tSER = dat3>>7;\n  \t\tdat3<<=1;\n\n  \t\tSRCLK=0;\n  \t\t_nop_();\n  \t\t_nop_();\n          SRCLK=1;\n  \t}\n  \tfor(a=0;a<8;a++)\n  \t{\n  \t\tSER = dat4>>7;\n  \t\tdat4<<=1;\n\n  \t\tSRCLK=0;\n  \t\t_nop_();\n  \t\t_nop_();\n          SRCLK=1;\n  \t}\n  \tRCLK=0;\n  \t_nop_();\n  \t_nop_();\n  \tRCLK=1;\n  }\n\n  int main()\n  {\n      u8 i;\n      while(1)\n      {\n          for(i=0;i<16;i++)\n          {\n              Send595(~ledwei[i+16],~ledwei[i],ledduan1[16+i],ledduan1[1]);\n              delay(10);\n          }\n      }\n  }\n  ```\n\n- 步进电机\n\n  ```c\n  #include "reg51.h"\n\n  typedef unsigned char u8;\n  typedef unsigned int u16;\n\n  sbit motoA=P1^0;\n  sbit motoB=P1^1;\n  sbit motoC=P1^2;\n  sbit motoD=P1^3;\n\n  #define SPEED 200\n\n  void delay(u16 i)\n  {\n      while(i--);\n  }\n\n  void main()\n  {\n  \tP1=0x00;\n      while(1)\n  \t{\n  \t\tmotoA=1;\n  \t\tmotoB=0;\n  \t\tmotoC=0;\n  \t\tmotoD=0;\n\n  \t\tdelay(SPEED);\n\n  \t\tmotoA=0;\n  \t\tmotoB=1;\n  \t\tmotoC=0;\n  \t\tmotoD=0;\n\n  \t\tdelay(SPEED);\n\n  \t\tmotoA=0;\n  \t\tmotoB=0;\n  \t\tmotoC=1;\n  \t\tmotoD=0;\n\n  \t\tdelay(SPEED);\n\n  \t\tmotoA=0;\n  \t\tmotoB=0;\n  \t\tmotoC=0;\n  \t\tmotoD=1;\n\n  \t\tdelay(SPEED);\n  \t}\n  }\n  ```\n'}}]);