var hello=require("./05.helloModule");
/*
    exports 和 module.exports
        -通过exports只能使用.的方式来向外部暴露内部变量
            exports.xxx=xxx

        -而module.exports既可以一.的形式，也可以直接赋值(以对象的方式)
            module.exports.xxx=xxx
            module.exports={}
*/ 
console.log(hello.name);
