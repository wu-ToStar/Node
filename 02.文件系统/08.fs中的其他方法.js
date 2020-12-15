var fs=require("fs");

path="C:\\Users\\Mr.wu\\Documents\\GitHub\\Test\\Node学习\\02.文件系统\\";






/*
    fs.existsSync(path)
        检查一个文件是否存在
*/ 
// var isExits=fs.existsSync(path+"hello.jpg");
// console.log(isExits);






/*
    fs.stat(path.callback)
    fs.statSync(path)
        -获取文件的状态
        -它会给我们返回一个对象，这个对象保存了当前对象状态的相关信息
*/ 
// fs.stat(path+"hello.jpg",function(err,stat){
//     /*
//         size  文件的大小
//         isFile()  是否是一个文件
//         isDirectory()  是否是一个文件
//     */ 
//     console.log(stat.size)
//     console.log(stat.isFile());
//     console.log(stat.isDirectory());
// })







/*
    fs.unlink(path,callback)
    fs.unlinkSync(path)
        -删除文件
*/
//fs.unlinkSync("show.jpg");







/*
    fs.readdir(path[,option],callback)
    fs.readdirSync(path[,option])
        -读取一个目录的目录结构
            files是一个字符串数组，每一个元素就是一个文件夹或文件的名字
*/ 
// fs.readdir(".",function(err,files){
//     if(!err){
//         console.log(files);
//     }
// });







/*
    fs.truncate(path,len,callback)
    fs.truncateSync(path,len)
        -截断文件，将文件修改为指定的大小
*/
// fs.truncateSync("hello.txt",10);






/*
    fs.mkdir(path[,mode],callback)
    fs.madirSync(path[,mode])
        -创建一个目录


    fs.rmdir(path,callback)
    fs.rmdirSync(path)
        -删除一个目录
*/ 
// fs.mkdirSync("hi");
// fs.rmdirSync("hi");




/*
    fs.rename(oldPath,newPath,callback)
    fs.renameSync(oldPath,newPath)
        -对文件进行重命名
        -参数：
            oldPath   旧的路径
            newPath  新的路径
            callback  回调函数
*/ 
// fs.rename("hello.txt","hi.txt",function(err){
//     if(!err){
//         console.log("修改成功~~")
//     }
// })




/*
    fs.watchFile(filename[,option],listener)
        -监视文件的修改
        -参数：
            filename 要监视的文件名字
            options 配置选项
            listeener 回调函数，当文件发生变化时，回调函数会执行
                    在回调函数中会有两个参数
                        curr 当前文件的状态
                        prev 修改文件前的状态
                            -这两个对象都时stats对象
*/ 
fs.watchFile("hi.txt",{interval:1000},function(curr,prev){
    console.log("修改前文件大小"+prev.size);
    console.log("修改前文件大小"+curr.size);
})
