/**
 * @Author liming
 * @Date 2022/10/21 15:37
 **/

//映射类型：从旧的类型生成一个新的类型(比如把一个类型中的所有属性变成只读)
//映射类型本质上就是预先定义的泛型接口
interface Obj {
    a: string;
    b: number;
    c:boolean
}
//只读
type ReadOnlyObj =  Readonly<Obj>
//这个类型别名就是TS内置的泛型接口

//可选
type PartialObj = Partial<Obj>

//子集
type PickObj = Pick<Obj,'a'|'b'>;

//同态
type RecordObj = Record<'x' | 'y', Obj>