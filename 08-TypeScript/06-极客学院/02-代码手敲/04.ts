abstract class Animal{
    eat() { 
        console.log('animal eat');
        
    }
    abstract sleep(): void
    //抽象方法的好处是你明确知道子类有其他的实现，你就没有必要在父类中实现了
}

class Dog extends Animal { 
    sleep() { 
        console.log('dog sleep');
        
    }
}
let dog = new Dog();
dog.eat()


class Cat extends Animal { 
    sleep() { 
        console.log('cat sleep');
        
    }
}
let cat = new Cat();
cat.eat()

let animals: Animal[] = [dog, cat];
animals.forEach(item => { 
    item.sleep();
    
})