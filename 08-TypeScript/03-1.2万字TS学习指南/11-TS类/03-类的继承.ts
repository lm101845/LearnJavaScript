/*
 * @Author: liming
 * @Date: 2022-01-11 14:56:22
 * @LastEditTime: 2022-01-11 15:00:05
 * @FilePath: \03-1.2万字TS学习指南\11-TS类\03-类的继承.ts
 */

class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
sam.move();
