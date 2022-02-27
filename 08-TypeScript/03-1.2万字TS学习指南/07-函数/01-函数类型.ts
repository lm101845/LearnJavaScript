/*
 * @Author: liming
 * @Date: 2022-01-11 14:09:09
 * @LastEditTime: 2022-01-11 14:16:22
 * @FilePath: \03-1.2万字TS学习指南\07-函数\01-函数类型.ts
 */

(() => { 
    let IdGenerator: (chars: string, nums: number) => string;

    function createUserId(name: string, id: number): string {
        return name + id;
    }

    IdGenerator = createUserId;
})()
