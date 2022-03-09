/**
 * 或许最强大的数组方法就属 splice() 了，使用它的方式可以有很多种。 splice() 的主要目的是
在数组中间插入元素，但有 3 种不同的方式使用这个方法。

  删除。需要给 splice() 传 2 个参数：要删除的第一个元素的位置和要删除的元素数量。可以从
数组中删除任意多个元素，比如 splice(0, 2) 会删除前两个元素。

  插入。需要给 splice() 传 3 个参数：开始位置、0（要删除的元素数量）和要插入的元素，可
以在数组中指定的位置插入元素。第三个参数之后还可以传第四个、第五个参数，乃至任意多
个要插入的元素。比如， splice(2, 0, "red", "green") 会从数组位置 2 开始插入字符串
"red" 和 "green" 。

  替换。 splice() 在删除元素的同时可以在指定位置插入新元素，同样要传入 3 个参数：开始位
置、要删除元素的数量和要插入的任意多个元素。要插入的元素数量不一定跟删除的元素数量
一致。比如， splice(2, 1, "red", "green") 会在位置 2 删除一个元素，然后从该位置开始
向数组中插入 "red" 和 "green" 。
 */
const uniqueArr = arr => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                // 每删除一个数，j--保证j的值经过自加后不变。
                // 同时，len--，减少循环次数提升性能
                len--;
                j--;
            }
        }
    }
    return arr;
}

//test
const testdata = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]
//注：{}表示一个空对象，{} == {} 为false
console.log(uniqueArr(testdata))
