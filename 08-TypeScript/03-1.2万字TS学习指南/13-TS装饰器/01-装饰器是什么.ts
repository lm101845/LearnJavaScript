/*
 * @Author: liming
 * @Date: 2022-01-11 15:58:06
 * @LastEditTime: 2022-01-11 15:58:07
 * @FilePath: \03-1.2万字TS学习指南\13-TS装饰器\01-装饰器是什么.ts
 */

/**
 * 它是一个表达式
该表达式被执行后，返回一个函数
函数的入参分别为 target、name 和 descriptor
执行该函数后，可能返回 descriptor 对象，用于配置 target 对象
 */
