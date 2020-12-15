/*
    流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
*/ 
var fs=require("fs");
path="C:\\Users\\Mr.wu\\Documents\\GitHub\\Test\\Node学习\\02.文件系统\\";
//创建一个可读流
var rs=fs.createReadStream(path+"hello.jpg");
//创建一个可写流
var ws=fs.createWriteStream(path+"hello3.jpg");

//监听流的开启和关闭

// rs.once("open",function(){
//     console.log("可读流打开了~~");
// });

// rs.once("close",function(){
//     console.log("可读流关闭了~~");
//     ws.end();
// });

// ws.once("open",function(){
//     console.log("可写流打开了~~");
// });

// ws.once("close",function(){
//     console.log("可写流关闭了~~");
// });

//pipe()可以将可读取的内容，直接输出到可写流中
rs.pipe(ws);

// rs.on("data",function(data){
//     ws.write(data);
// })