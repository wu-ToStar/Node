// module.exports={
//     name:"猪八戒",
//     age:28,
//     sayName:function(){
//             console.log("我是猪八戒~~~")
//     }
// };

exports={
    name:"孙悟空",
    age:28,
    sayName:function(){
            console.log("我是孙悟空~~~")
    }
};

var obj =new Object();
obj.name="孙悟空";
var obj2=obj;
obj2=null;

console.log(obj);
console.log(obj2);
