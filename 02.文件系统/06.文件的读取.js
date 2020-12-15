var fs = require('fs');

//同步文件的读取
/*
   fs.readSync(fd, buffer, offset, length, position)
   接收参数：
      buffer      缓冲区，数据将被写入。

      offset      buffer写入的偏移量

      length     （integer）   指定文件读取字节数长度

      position   （integer）   指定文件读取的起始位置，如果该项为null，将从当前文件指针的位置开始读取数据。
*/ 

// fs.open('hello.txt' , 'r' , function (err,fd){
//    if(!err){
//       var buf =Buffer.alloc(30);
//       fs.readSync(fd, buf,0,30,null);
//       console.log(buf.toString());
//    }else{
//       console.error(err);
//       return;
//    }
// })




//异步文件的读取
/*
   fs.read(fd,buffer,offset,length,position,[callback(err,bytesRead,buffer)])

   接收参数：
      buffer      缓冲区，数据将被写入。

      offset      buffer写入的偏移量

      length     （integer）   指定文件读取字节数长度

      position   （integer）   指定文件读取的起始位置，如果该项为null，将从当前文件指针的位置开始读取数据。

      callback      回调传递了三个参数，err， bytesRead， buffer

      · err  异常

      · bytesRead:读取的字节数

      · buffer:缓冲区对象
*/ 
// fs.open('hello.txt' , 'r' , function (err,fd){
//    if(!err){
//       var buf =Buffer.alloc(30);
//          fs.read(fd, buf, 0, 30, null, function(err,bytesRead, buffer){
//          if(!err){
//                   console.log('bytesRead' +bytesRead);
//                   console.log(buffer.toString());
//          }else{
//             console.log(err);
//             return;
//          }
//       });
//    }else{
//       console.error(err);
//       return;
//    }
// });



//简单文件读取
/*
   fs.readFile(path[,potions],callback)
   fs.readFileSync(path[,option])
      -path       要读取的文件的路径
      -options    要读取的选项
      -callback   回调函数，通过回调函数将内容读取内容返回（err,data)
            err   错误对象
            data  读取的数据，会返回一个Buffer
*/ 
fs.readFile("show.jpg",function(err,data){
   // if(!err){
   //    console.log(data.toString());
   // }
   if(!err){
      fs.writeFile("hello.jpg",data,function(err){
         if(!err){
            console.log("图片写入成功~~");
         }
      })
   }
});