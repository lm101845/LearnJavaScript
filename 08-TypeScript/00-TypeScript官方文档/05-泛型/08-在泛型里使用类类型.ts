/*
 * @Author: liming
 * @Date: 2022-01-30 10:52:38
 * @LastEditTime: 2022-01-30 10:52:39
 * @FilePath: \00-TypeScript官方文档\05-泛型\08-在泛型里使用类类型.ts
 */
(() => { 
    function create<T>(c: {new(): T; }): T {
        return new c();
    }
    //一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
    class BeeKeeper {
    hasMask: boolean | undefined;
}

class ZooKeeper {
    nametag: string | undefined;
}

class Animal {
    numLegs: number| undefined;
}

class Bee extends Animal {
    keeper: BeeKeeper| undefined;
}

class Lion extends Animal {
    keeper: ZooKeeper| undefined;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!
})()
