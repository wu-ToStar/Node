/*
    Buffer(缓冲区)
        -Buffer的结构和数组很像，操作的方法和数组类似
        -数组不能存储二进制文件，而Buffer就是专门来存储二进制数据
        -使用Buffer不需要引入模块，直接使用即可
        -在buffer中存储的都是二进制数据，但是在显示时是以16进制的形式显示

            buffer中每一个元素的范围是从00-ff 0-255
            00000000 - 11111111

            计算机中一个 或 一个1 我们称为1位（bit）
            8bit = 1byte(字节)
            1024kb = 1mb
            1024mb = 1gb
            1024gb = 1tb

            buffer 中的一个元素，占用内存的一个字节

        -buffer的大小一旦确定了，则不能修改，buffer实际上是对底层内存的实际操作
*/ 
var str="hello 尚硅谷";//一个中文在Unicode编码中占三个字节

//将一个字符串保存到buffer中
var buf=Buffer.from(str);

// console.log(buf.length);//占用内存的大小
// console.log(str.length);//字符串的长度

// console.log(buf);

// var buf2=new Buffer(10);//不推荐使用
// console.log(buf2.length);

var buf2=Buffer.alloc(10);
//通过索引来，来操作buf中的元素
buf2[0]=88;//十进制
buf2[1]=255;
buf2[2]=0xaa;//十六进制

//buf[3]=556;//结果对应不上
//1000101100  //十进制
//  00101100  //八进制
console.log(buf2);
//console.log(buf2[2]);//控制台输出显示是十进制
for(var i=0;i<buf2.length;i++){
    console.log(buf2[i]);
}

//Buffer.allocUnsafe(size)创建一个指定大小的buffer，但是buffer中可能含有敏感数据
// var buf3=Buffer.allocUnsafe(10);
// console.log(buf3);

var buf4 =Buffer.from("你好");

console.log(buf4.toString());//将缓冲区的实际转换为字符串