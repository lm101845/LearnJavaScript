interface Obj {
    a: string;
    b: number;
}
type ReadonlyObj = Readonly<Obj>  //类型只读
 
type PartialObj = Partial<Obj>    //类型可选

type PickObj = Pick<Obj, 'a' | 'b'>  //Pick可以抽取Obj的一些子集，形成新的类型

type RecordObj = Record<'x' | 'y', Obj>
