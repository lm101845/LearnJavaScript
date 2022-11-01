/**
 * @Author liming
 * @Date 2022/11/1 15:13
 **/

const math = require('../src/math')
test('add:1+1=2',()=>{
    expect(math.add(1,1)).toBe(2)
})

test('add:1-2=-1',()=>{
    expect(math.sub(1,2)).toBe(-1)
})