/*
    文件系统（File System）
        -文件系统阶段来说就是通过Node来操作系统中的文件
        -使用文件系统，需要先引入fs模块，fs是核心模块，直接引入不需要下载

    文件的写入
        -手动操作的步骤
            1.打开文件
                fs.openSyns(path,flags[,mode])
                    -path 要打开文件的路径
                    -flags打开文件要进行的操作类型
                        r 只读的
                        w 可写的
                    -mode 设置文件的操作权限
                返回值：
                    -该方法会返回一个描述符作为结果，我们可以通过该模式符都忘记进行操作

            2.向文件中写入内容
                fs.writeSync(fd,string[,position,encodeing])
                    -fd 忘记的描述符，需要长度要写入的文件的描述符
                    -string 要写入的内容
                    -position 写入的起始位置
                    -encoding 写入的包名
 
            3.保存并关闭
                fs.closeSync(fd)
                    -要关闭的文件的描述符
*/ 
var fs=require("fs"); 

//打开文件
var fd=fs.openSync("hello.txt","w");
//console.log(fd);

//向文件中写入内容
fs.writeSync(fd,"今天天气真不错~~~",2,"utf-8");

//关闭文件
fs.closeSync(fd);