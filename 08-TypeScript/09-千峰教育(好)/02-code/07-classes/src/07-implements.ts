/**
 * @Author liming
 * @Date 2023/9/16 13:38
 **/
interface Pingable {
    ping(): void
}

class Sonar implements Pingable {
    ping() {
        console.log("ping")
    }
}

class Ball implements Pingable {
    ping() {
    }

    pong() {
    }
}

console.log("======================")

interface A {
}

interface B {
}

class C implements A, B {

}

console.log("======================")

interface Checkable {
    check(name: string): boolean
}

class NameChecker implements Checkable {
    check(s: string) {
        return s.toLowerCase() === 'ok'
    }
}

console.log("======================")

interface Fruit {
    x: number
    y?: number
}

class Banana implements Fruit{
    x = 10
}

const banana = new Banana()
console.log(banana.x)
