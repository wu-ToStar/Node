# Node简介

    Node.js是一个能够在服务端运行JavaScript的开放源代码，跨平台JavaScript运行环境,
    Node采用Google开发的V8引擎运行js代码，使用事件驱动，非阻塞和异步i/o模型等技术来提供
    瑞安——达尔（Ryan Dahl）--node.js之父（2009开始创作）
    Node的用途（比如REST）
    Web服务API
    实时多人游戏
    后端的Web服务（跨域）
    基于Web的应用
    多客户端的通信


    命令行窗口（小黑屏）,cmd,终端------(win+R)
    -常用命令
        dir 目录名 列出当前目录的使用文件夹
        cd 目录名 进入到指定的目录
        md 目录名 创建一个文件夹
        re 目录名 生成一个文件夹
    
        -目录
            .表示当前目录
            ..表示上一级目录
    
        -环境变量(window系统中变量)
            -我们可以在一些经常需要访问的程序和文件的路径添加到path中，
                这样我们就可以在任意位置来访问这些文件和程序
    
    进程和线程
        进程
            -进程负责为程序的运行提供必备的环境
            -进程就相对于工厂的车间
    
        线程
            -线程计算机中最小的结束单位，线程负责进程中的程序
            -线程就相当于工厂的工人
    
        单线程
            -JS是单线程
    
        传统的服务器是多线程的
            -每一次请求，就创建一个线程去处理请求
    
        Node的服务器是单线程的
            -node处理请求是单线程，但是在后台拥有一个I/O线程池

    包 page
        -包结构
            -用于组织包中的各种文件

            -package.json  描述文件*******
                {
                    "dependcies"--->依赖
                    "description" --->描述包是干什么的
                    "devDependcies"--->开发依赖
                    "homepage"---->主页
                    "license"--->权限和协议
                    "main"--->主文件
                    "maintainers"---->贡献者
                    "name" --->包名
                    "repository"--->github仓库地址
                    "scripts"--->一些命令
                    "version"--->版本
                }
            -bin    可执行二进制文件
            -lib    js代码
            -doc    文档
            -test   单元测试
        -包描述文件
            -描述包的相关信息，以供外部读取分析
    Npm(Node Package Manager)
        -对于Node而言，Npm步骤其完成了第三方模块的发布，安装和依赖

    -npm的命令
            -npm -v 查看npm的版本
            -npm version 查看所有模块的版本
            -npm search  包名 搜索包
            -npm install /i 包名 安装包
            -npm remove  /r 包名 删除包
            -npm install 包名 --save 安装包并添加到依赖中 *******
            -npm install 下载当前项目所依赖的包
            -npm install 包名 -g 全局安装包（全局安装包一般是一些工具）

    -国内npm使用
        -npm install -g cnpm --registry=https://registry.npm.taobao.org
