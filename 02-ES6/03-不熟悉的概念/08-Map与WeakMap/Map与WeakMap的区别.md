# Map与WeakMap的区别

Map和WeakMap是两种不同类型的数据结构，它们都用于存储键值对，但有一些显著的区别。

区别一：键的类型

Map中的键可以是任意类型的值，包括对象。WeakMap中的键必须是对象，且是弱引用，也就是说，只要没有其他的引用指向该对象，它就可以被垃圾回收。

区别二：可遍历性

Map是可遍历的，因此可以使用for-of循环遍历Map中的条目，也可以使用Object.keys()、Object.values()或Object.entries()来访问它们。WeakMap是不可遍历的，因此无法使用for-of循环遍历它，也无法使用Object.keys()、Object.values()或Object.entries()来访问它。

区别三：使用场景

Map适用于一般性的键值对存储，可以用于存储任意类型的值，并支持遍历。WeakMap则更适用于与对象相关的数据，并且只希望在对象本身存在时，这些数据才存在。由于WeakMap的键是弱引用，所以当对象不再被引用时，它就可以被垃圾回收，因此WeakMap可以用于防止内存泄漏。