import { Injectable } from '@nestjs/common';
import { ResultModel } from '../models/result.model';
// interface User{
//     username: string;
//     password: string;
//     nickname: string;
// }
@Injectable()
export class UserService {
  login(username: string, password: string): ResultModel<object> {
    let obj = {
      username: 'admin',
      password: '123456',
      nickname: '管理员',
    };
    if (obj.username == username && obj.password == password) {
      return new ResultModel(
        200,
        {
          userInfo: obj,
          token: 'abc',
        },
        '登录成功',
      );
    } else {
      return new ResultModel(500, null, '账号或密码错误');
    }
  }
}
