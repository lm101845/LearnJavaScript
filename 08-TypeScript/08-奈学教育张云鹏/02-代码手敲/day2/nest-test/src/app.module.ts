import { Module } from '@nestjs/common';
import { UserModule } from './module/user.module';
@Module({
  imports: [UserModule],
})
export class AppModule {}
