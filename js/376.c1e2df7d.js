(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{1004:function(n,r){n.exports="\x3c!--\ntitle: WireGuard\nsort:\n--\x3e\n\n> [安装脚本](https://github.com/angristan/wireguard-install)\n\n```bash\n# 服务端\ncurl -O https://raw.githubusercontent.com/angristan/wireguard-install/master/wireguard-install.sh\nchmod +x wireguard-install.sh\n./wireguard-install.sh\n\n# 客户端\napt install wireguard # 安装\nvim /etc/wireguard/wg0.conf # 配置文件\n\nwg-quick on wg0 # 启动\nwg-quick down wg0 # 停止\n# 问题\nln -s /usr/bin/resolvectl /usr/local/bin/resolvconf\n# 开启后ssh无法连接\n```\n"}}]);