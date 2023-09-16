/**
 * @Author liming
 * @Date 2023/9/16 14:03
 **/
class Animal {
    move() {
        console.log('Moving along!')
    }
}

class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log('woof!')
        }
    }
}

const d = new Dog()
d.move()
d.woof(3)
