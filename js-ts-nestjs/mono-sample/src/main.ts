import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalFilters } from './shared/filters';
import { GlobalInterceptors } from './shared/interceptors';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(...GlobalFilters);
  app.useGlobalInterceptors(...GlobalInterceptors);

  const options = new DocumentBuilder()
    .setTitle('NESTJS Challenge API')
    .setDescription('NESTJS Challenge API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/v1/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
