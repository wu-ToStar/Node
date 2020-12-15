/*
    异步和同步，简单文件的写入都不适合大文件的写入，性能较差，任意导致内存溢出
*/ 
var fs =require("fs");

/*
    fs.createWriteStream(path[,option])
        -可以用来创建一个可写流
        -path，文件路径
        -options 配置的参数
*/
var ws=fs.createWriteStream("hello3.txt");

/*
    on(事件字符串，回调函数)
        -可以为对象绑定一个事件
    once(事件字符串，回调函数)
        -可以为对象绑定一个一次性事件，该事件会在触发一次以后自动失效
*/ 
ws.once("open",function(){
    console.log("流打开了~~");
});

ws.once("close",function(){
    console.log("流关闭了~~");
});

ws.write("hi");
ws.write("! I");
ws.write(" am");
ws.write(" Wu");
ws.write("jiu");
ws.write("sheng");

//ws.close();
ws.end();