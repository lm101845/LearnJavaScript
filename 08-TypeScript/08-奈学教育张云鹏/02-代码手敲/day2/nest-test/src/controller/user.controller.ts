import { Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { ResultModel } from '../models/result.model';
@Controller('/user')
//控制器只做转发，不做业务实现
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/login')
  login(
    @Query('username') username: string,
    @Query('password') password: string,
  ): ResultModel<object> {
    return this.userService.login(username, password);
  }
}
