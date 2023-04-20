(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{936:function(n,e){n.exports="\x3c!--\ntitle: 40-网络编程\nsort:\n--\x3e\n\n# 网络编程\n\n## TCP\n\n### 客户端\n\n基于 tcp 连接的 Socket\n\n```python\nimport socket\n\n# 创建socket，使用IPv4，面向流的TCP协议\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.connect(('www.sina.cn', 80))\n\ns.send(b'GET / HTTP/1.1\\r\\nHost: www.sina.com.cn\\r\\nConnection: close\\r\\n\\r\\n')\n\n# 接收数据:\nbuffer = []\nwhile True:\n    # 每次最多接收1k字节:\n    d = s.recv(1024)\n    if d:\n        buffer.append(d)\n    else:\n        break\ndata = b''.join(buffer)\t\t# 将列表变成字符串\ns.close()\nheader, html = data.split(b'\\r\\n\\r\\n', 1)\t# 将header与html凭借换行符分开\nprint(header.decode('utf-8'))\n# 把接收的数据写入文件:\nwith open('sina.html', 'wb') as f:\n    f.write(html)\n```\n\n### 服务器\n\n#### 服务器端\n\n```python\nimport socket\nimport threading\nimport time\n\n\ndef tcplink(sock, addr):    # 发送数据包\n    print('connection from %s:%s' % addr)\n    sock.send(b'WELCOME')\n    while True:\n        r = sock.recv(1024) # 接收信息\n        time.sleep(1)\n        if r == 'exit' or r.decode('utf-8') == 'exit':\n            break\n        sock.send(b'HELLO,%s' % r)  # 发送信息\n    sock.close()\n    print('connection from %s:%s closed' % addr)\n\n\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.bind(('127.0.0.1', 9999))\ns.listen(5) # 最多5个连接\nwhile True:\n    sock, addr = s.accept() # 接受一个连接\n    t = threading.Thread(target=tcplink, args=(sock, addr)) # 新建线程\n    t.start()\n```\n\n#### 用户端\n\n```python\nimport socket\n\ns1=socket.socket(socket.AF_INET,socket.SOCK_STREAM)\ns1.connect(('127.0.0.1',9999))\n\nfor i in [b'lily',b'tom',b'jim']:\n\ts1.send(i)  # 发送信息\n\twhile True:\n\t\tr = s1.recv(1024)\n\t\tif r:\n\t\t\tprint(r.decode('utf-8'))\n\t\telse:\n\t\t\tbreak\ns1.send(b'exit')\ns1.close()\n```\n\n## UDP 编程\n\n```python\n# 服务器\ns = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\ns.bind(('127.0.0.1', 9999))\t\t# UDP首先要绑定端口\nprint('Bind UDP on 9999...')\nwhile True:\n    # 接收数据:\n    data, addr = s.recvfrom(1024)\n    print('Received from %s:%s.' % addr)\n    s.sendto(b'Hello, %s!' % data, addr)\n\n# 客户端\ns = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nfor data in [b'Michael', b'Tracy', b'Sarah']:\n    # 发送数据:\n    s.sendto(data, ('127.0.0.1', 9999))\n    # 接收数据:\n    print(s.recv(1024).decode('utf-8'))\ns.close()\n```\n\n-\n"}}]);