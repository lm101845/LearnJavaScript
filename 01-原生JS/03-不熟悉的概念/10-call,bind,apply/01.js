// 以下代码必须看过《疯狂动物城》才可看懂（逃）
//https://segmentfault.com/a/1190000004581945
function animal(name,food) {
   this.name = name,
    this.food = food,
   this.say = function() {
        console.log(name +" likes " + this.food + '.');
   }
}

function rabbit(name,food) {
   animal.call(this,name,food);
}

var Judy = new rabbit('Judy','carrot');

Judy.say();// >>> Judy likes carrot.