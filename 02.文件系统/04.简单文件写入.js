/*
    简单文件写入
        fs.writeFile(file,date[,options],callback)
        fs.writeFileSync(file,data[,options])
            -file  要操作的路径
            -data  要写入的数据
            -options  选项，可以对写入进行一些设置
            -callback 当写入完成以后执行的函数

        -flag
            r   读取文件，不存在则抛出异常
            w   打开文件用于写操作，不存在则创建
            wx  打开文件用于写操作，存在则打开失败
            a   打开文件用于追加，不存在则创建
*/ 
var fs=require("fs");

//路径（path）
//C:\\Users\\Mr.wu\\Desktop\\hello.txt
var path="C:/Users/Mr.wu/Desktop/hello.txt";
fs.writeFile(path,"这是通过writeFile写入的内容",{flag:"a"},function(err){
    if(!err){
        console.log("写入成功~~~");
    }
})

// fs.writeFileSync("C:/Users/Mr.wu/Desktop/hello2.txt","这是通过writeFileSync写入的内容",{flag:"a"});
