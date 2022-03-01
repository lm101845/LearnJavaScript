import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 配置公共访问路径
  app.setGlobalPrefix('/api');
  await app.listen(8088);
}
bootstrap();
