(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{1042:function(n,o){n.exports="\x3c!--\ntitle: debugfs\nsort:\n--\x3e\n\n> 恢复误删除文件\n\n```bash\ndf ~\t\t# 查看当前目录所属分区\ndebugfs\n> open /dev/vda1\n> ls -d /root/.ssh/\n<134670> (3992) authorized_keys.bak\n> logdump -i <134670>\nInode 134670 is at group 16, block 524432, offset 1664\nJournal starts at block 16415, transaction 2235770\nNo magic number at block 17011: end of journal.\n> q\n\ndd if=/dev/vda1 of=/root/.ssh/authorized_keys.bak bs=1664 count=1 skip=524432\n```\n"}}]);