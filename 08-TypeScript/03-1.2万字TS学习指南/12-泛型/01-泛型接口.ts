/*
 * @Author: liming
 * @Date: 2022-01-11 15:16:26
 * @LastEditTime: 2022-01-11 15:22:33
 * @FilePath: \03-1.2万字TS学习指南\12-泛型\01-泛型接口.ts
 */

interface GenericIdentityFn<T>{
    (arg:T):T
}
