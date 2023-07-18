/**
 * @Author liming
 * @Date 2023/7/18 10:25
 **/

interface User {
    admin: boolean
}

interface DB {
    filterUsers(filter: (this: User) => boolean): User[]
}

const db:DB = {
    filterUsers: (filter: (this: User) => boolean) => {
        let user1: User = {
            admin: true
        }

        let user2: User = {
            admin: false
        }

        return [ user1, user2 ]
    }
}

const admins1 = db.filterUsers(function(this: User) {
  return this.admin
})

//不能使用箭头函数,因为箭头函数不能包含this参数
// const admins2 = db.filterUsers((this: User) => {
//     return this.admin
// })

console.log(admins1)
// console.log(admins2)
