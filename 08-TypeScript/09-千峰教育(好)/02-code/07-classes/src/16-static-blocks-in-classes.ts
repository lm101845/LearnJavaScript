/**
 * @Author liming
 * @Date 2023/9/17 14:15
 **/

class Foo {
    static #count = 0

    get count() {
        return Foo.#count
    }

    static {
        try {
            const lastInstance = {
                length: 100
            }
            Foo.#count += lastInstance.length
        } catch {
        }
    }
}

// Foo.#count
//它具有专有标识符#,无法外部调用
