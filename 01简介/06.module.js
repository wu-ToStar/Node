/*
    通过npm选择的包都会放到node_modules文件夹中
        我们通过npm下载的包，直接通过包引入即可

    node在使用模块名字来引入模块时，它会首先在当前的node_modules中寻找是否有该模块
        如果有则直接使用，没有则去上一级，以此类推
        直到找到磁盘的根目录，如果没有则报错
*/ 
var math=require("math");

console.log(math.add(2,4));